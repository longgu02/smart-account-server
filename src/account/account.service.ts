import { Injectable } from '@nestjs/common'
import { AF_ADDRESS, EP_ADDRESS, PM_ADDRESS } from 'src/constant/addresses'
import { Contract, ContractFactory, JsonRpcProvider, Wallet, ethers, getAddress, sha256 } from 'ethers'
import { AF_BYTECODE, accountFactoryAbi } from 'src/constant/abis/abis/accountFactory'
import { entryPointAbi } from 'src/constant/abis/abis/entryPointAbi'
import { UserOp } from 'src/types/interfaces'
import { accountAbi } from 'src/constant/abis/abis/accountAbi'
import { InjectModel } from '@nestjs/mongoose'
import { Account } from './schemas/account.schema'
import { Model } from 'mongoose'
import { hash, genSalt } from 'bcrypt'
import { getWalletAddress } from 'src/utils'

@Injectable()
export class AccountService {
  constructor(@InjectModel(Account.name) private accountModel: Model<Account>) {}

  async createAccount(email: string, password: string) {
    const newKeyHash = await this.genKey(password)
    const account = await this.accountModel.create({
      email: email,
      password: await this.hashPassword(password),
      salt: newKeyHash.salt,
      keyHash: newKeyHash.encryptedPrivateKey
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

  async calculateAccount(keyHash: string, salt: string, password: string) {
    // Provider
    const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
    const provider = new JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`)

    // Wallet
    const privateKey = await this.decipherKey(keyHash, salt, password)
    const wallet = new Wallet(privateKey)
    const signer = wallet.connect(provider)

    // Contract
    const AccountFactory = new ContractFactory(accountFactoryAbi, AF_BYTECODE, provider)
    const AFContract = new Contract(AF_ADDRESS, accountFactoryAbi, signer)
    const EPContract = new Contract(EP_ADDRESS, entryPointAbi, signer)

    // Init code
    const initCode =
      AF_ADDRESS + AccountFactory.interface.encodeFunctionData('createAccount', [wallet.address]).slice(2)

    let sender: any

    // Calculate address from the entry point
    try {
      await EPContract.getSenderAddress(initCode)
    } catch (ex: any) {
      // Local
      // sender = "0x" + ex.data.data.slice(-40);
      // Testnet
      sender = '0x' + ex.data.slice(-40)
      // console.log(ex);
    }

    return sender
  }

  private async hashPassword(password: string): Promise<string> {
    return await hash(password, 10)
  }

  private genKey(password: string): Promise<{ salt: string; encryptedPrivateKey: string }> {
    // Generate a new key pair
    const wallet = Wallet.createRandom()

    console.log({ password })

    // Get the private key
    const privKey = wallet.privateKey

    // Get the public key
    const publicKey = wallet.publicKey

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

    return result
  }

  private decipherKey(keyHash: string, salt: string, password: string) {
    const passwordHash = require('crypto').pbkdf2Sync(password, Buffer.from(salt, 'hex'), 100000, 32, 'sha512')
    const decipher = require('crypto').createDecipheriv('aes-256-cbc', passwordHash, Buffer.from(salt, 'hex'))
    let decryptedPrivateKey = decipher.update(keyHash, 'hex', 'utf8')
    decryptedPrivateKey += decipher.final('utf8')
    return decryptedPrivateKey
  }
}
