import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AF_ADDRESS, ECDSASM_ADDRESS, EP_ADDRESS, PM_ADDRESS } from 'src/constant/addresses'
import { Contract, ContractFactory, JsonRpcProvider, Wallet, ethers, getAddress, sha256 } from 'ethers'
import { AF_BYTECODE, accountFactoryAbi } from 'src/constant/abis/abis/accountFactory'
import { entryPointAbi } from 'src/constant/abis/abis/entryPointAbi'
import { UserOp } from 'src/types/interfaces'
import { accountAbi, accountByteCode } from 'src/constant/abis/abis/accountAbi'
import { InjectModel } from '@nestjs/mongoose'
import { Account } from './schemas/account.schema'
import { Model } from 'mongoose'
import { hash, genSalt } from 'bcrypt'
import { getServerWalletWithProvider, getWalletAddress } from 'src/utils'
import { fillUserOp } from 'src/utils/userOp'
import { SignMessageDto } from './dto/signMessage.dto'
import { AuthService } from 'src/auth/auth.service'
import { compare } from 'bcrypt'

@Injectable()
export class AccountService {
  constructor(@InjectModel(Account.name) private accountModel: Model<Account>) {}

  async createAccount(email: string, password: string) {
    const newKeyHash = await this.genKey(password)
    const account = await this.accountModel.create({
      email: email,
      password: await this.hashPassword(password),
      salt: newKeyHash.salt,
      keyHash: newKeyHash.encryptedPrivateKey,
      address: newKeyHash.address
    })

    await account.save()
    return { account }
  }

  async getAllAccount() {
    const accounts = await this.accountModel.find({})
    return accounts
  }

  findAll() {
    return `This action returns all user`
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`
  }

  findById(id: string) {
    return this.accountModel.findById(id)
  }

  findOne(email: string) {
    return this.accountModel.findOne({ email })
  }
  // keyHash: string, salt: string, password: string
  async calculateAccount(address: string) {
    // Provider
    const { signer, provider } = getServerWalletWithProvider()
    console.log(await provider.getBalance(signer.address))

    // Contract
    const AccountFactory = new ContractFactory(accountFactoryAbi, AF_BYTECODE, provider)
    const EPContract = new Contract(EP_ADDRESS, entryPointAbi, signer)

    // Init code
    let initCode =
      AF_ADDRESS +
      AccountFactory.interface.encodeFunctionData('createAccount', [address, ECDSASM_ADDRESS, EP_ADDRESS]).slice(2)

    let sender: any

    // Calculate address from the entry point
    try {
      await EPContract.getSenderAddress(initCode)
    } catch (ex: any) {
      // Local
      // sender = "0x" + ex.data.data.slice(-40);
      // Testnet
      sender = '0x' + ex.data.slice(-40)
      // console.log(ex)
    }

    return sender
  }

  public async addAddressBookContact(account: string, newAddress: string, name: string) {
    const matchedAccount = await this.accountModel.findOne({ address: account })
    matchedAccount.addressBook = [...matchedAccount.addressBook, { address: newAddress, name: name }]
    await matchedAccount.save()
    return matchedAccount
  }

  public async getAddressBook(account: string) {
    const matchedAccount = await this.accountModel.findOne({ address: account })
    return matchedAccount.addressBook
  }

  private async hashPassword(password: string): Promise<string> {
    return await hash(password, 10)
  }

  private genKey(password: string): Promise<{ salt: string; encryptedPrivateKey: string; address: string }> {
    // Generate a new key pair
    const wallet = Wallet.createRandom()

    console.log({ password })

    // Get the private key
    const privKey = wallet.privateKey

    // console.log({ privateKey, publicKey })
    const result: any = {}

    const salt = require('crypto').randomBytes(16)
    const hash = require('crypto').pbkdf2Sync(password, salt, 100000, 32, 'sha512')
    console.log({ hashString: hash.toString('hex') })
    const cipher = require('crypto').createCipheriv('aes-256-cbc', hash, salt)
    // Create an AES cipher

    // Encrypt the private key
    let encryptedPrivateKey = cipher.update(privKey, 'utf8', 'hex')
    encryptedPrivateKey += cipher.final('hex')

    result.salt = salt.toString('hex')
    result.encryptedPrivateKey = encryptedPrivateKey
    result.address = wallet.address

    return result
  }

  private decipherKey(keyHash: string, salt: string, password: string) {
    const passwordHash = require('crypto').pbkdf2Sync(password, Buffer.from(salt, 'hex'), 100000, 32, 'sha512')
    const decipher = require('crypto').createDecipheriv('aes-256-cbc', passwordHash, Buffer.from(salt, 'hex'))
    let decryptedPrivateKey = decipher.update(keyHash, 'hex', 'utf8')
    decryptedPrivateKey += decipher.final('utf8')
    return decryptedPrivateKey
  }

  public async signMessage(signMessageDto: SignMessageDto) {
    const user = await this.findOne(signMessageDto.email)

    const isMatched = await compare(signMessageDto.password, user.password)

    if (!isMatched) {
      throw new UnauthorizedException({ message: 'Can not sign the message', error: 'Unauthorize' })
    }

    const privKey = await this.decipherKey(user.keyHash, user.salt, signMessageDto.password)
    const wallet = new Wallet(privKey)
    const signedMessage = await wallet.signMessage(ethers.getBytes(signMessageDto.message))
    const recovered = ethers.recoverAddress(signMessageDto.message, signedMessage)
    return signedMessage
  }
}
