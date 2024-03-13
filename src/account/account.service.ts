import { Injectable } from '@nestjs/common'
import { AF_ADDRESS, EP_ADDRESS, PM_ADDRESS } from 'src/constant/addresses'
import { Contract, ContractFactory, JsonRpcProvider, ethers, sha256 } from 'ethers'
import { AF_BYTECODE, accountFactoryAbi } from 'src/constant/abis/abis/accountFactory'
import { entryPointAbi } from 'src/constant/abis/abis/entryPointAbi'
import { UserOp } from 'src/types/interfaces'
import { accountAbi } from 'src/constant/abis/abis/accountAbi'
import { InjectModel } from '@nestjs/mongoose'
import { Account } from './schemas/account.schema'
import { Model } from 'mongoose'
import { hash, genSalt } from 'bcrypt'

@Injectable()
export class AccountService {
  // userRepository;
  constructor(@InjectModel(Account.name) private accountModel: Model<Account>) {}

  async createAccount(email: string, password: string) {
    const newKeyHash = await this.genKey(password)
    const account = await this.accountModel.create({
      email: email,
      password: await this.hashPassword(password),
      salt: newKeyHash.salt,
      keyHash: newKeyHash.encryptedPrivateKey
    })
    // console.log({ newKey })
    // await account.save()
    console.log(account)
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

  async calculateAccount() {
    const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
    const provider = new JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`)
    const signer = wallet.connect(provider)
    const AccountFactory = new ContractFactory(accountFactoryAbi, AF_BYTECODE, provider)
    const AFContract = new Contract(AF_ADDRESS, accountFactoryAbi, signer)
    const EPContract = new Contract(EP_ADDRESS, entryPointAbi, signer)

    const initCode =
      AF_ADDRESS +
      AccountFactory.interface
        .encodeFunctionData('createAccount', ['0xF6f94b71bbdc4716dc138A04593a7fb0504F3e43'])
        .slice(2)

    let sender: any

    try {
      await EPContract.getSenderAddress(initCode)
    } catch (ex: any) {
      // Local
      // sender = "0x" + ex.data.data.slice(-40);
      // Testnet
      sender = '0x' + ex.data.slice(-40)
      // console.log(ex);
    }

    return [{ sender }]
  }

  async transfer() {
    const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
    const provider = new JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`)
    const signer = wallet.connect(provider)
    const Account = new ContractFactory(accountAbi, '0xd3e5b33d4e94ef7764b8a9341c1004df7ebbcd01', provider)
    const EPContract = new Contract(EP_ADDRESS, entryPointAbi, signer)

    const userOp: UserOp = {
      sender: '0xd3e5b33d4e94ef7764b8a9341c1004df7ebbcd01', // smart account address
      nonce: '0x' + (await EPContract.getNonce('0xd3e5b33d4e94ef7764b8a9341c1004df7ebbcd01', 0)).toString(16),
      initCode: '0x',
      // callData: Account.interface.encodeFunctionData("execute"),
      callData: Account.interface.encodeFunctionData('sendEther', [
        '0xF6f94b71bbdc4716dc138A04593a7fb0504F3e43',
        ethers.parseEther('0.000002')
      ]),
      paymasterAndData: PM_ADDRESS,
      signature:
        '0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c'
    }

    const { preVerificationGas, verificationGasLimit, callGasLimit } = await provider.send(
      'eth_estimateUserOperationGas',
      [userOp, EP_ADDRESS]
    )

    userOp.preVerificationGas = preVerificationGas
    userOp.verificationGasLimit = verificationGasLimit
    userOp.callGasLimit = callGasLimit

    const { maxFeePerGas } = await provider.getFeeData()
    userOp.maxFeePerGas = '0x' + maxFeePerGas?.toString(16)

    const maxPriorityFeePerGas = await provider.send('rundler_maxPriorityFeePerGas', [])
    userOp.maxPriorityFeePerGas = maxPriorityFeePerGas

    const userOpHash = await EPContract.getUserOpHash(userOp)
    userOp.signature = await signer.signMessage(ethers.getBytes(userOpHash))

    const opHash = await provider.send('eth_sendUserOperation', [userOp, EP_ADDRESS])

    let transactionHash
    while (!transactionHash || transactionHash == null) {
      await provider.send('eth_getUserOperationByHash', [opHash]).then(res => {
        if (res != null) {
          transactionHash = res.transactionHash
        }
        // console.log(res);
      })
    }
    console.log(transactionHash)
  }

  private async hashPassword(password: string): Promise<string> {
    return await hash(password, 10)
  }

  private genKey(password: string): Promise<{ salt: string; encryptedPrivateKey: string }> {
    const EC = require('elliptic').ec
    const ec = new EC('secp256k1')

    const result: any = {}

    const key = ec.genKeyPair()
    const privKey = key.getPrivate()

    const salt = require('crypto').randomBytes(16)
    // const key = crypto.pbkdf2Sync()
    // User's password
    // // Derive an encryption key from the password
    const hash = require('crypto').pbkdf2Sync(password, salt, 100000, 32, 'sha512')
    // console.log(encryptedKey.toString());
    // console.log({ hash })
    console.log({ hashString: hash.toString('hex') })
    // // Create an AES cipher
    const cipher = require('crypto').createCipheriv('aes-256-cbc', hash, salt)
    // console.log({ cipher })
    // console.log({ cipherString: cipher.toString('hex') })

    // // Encrypt the private key
    let encryptedPrivateKey = cipher.update(privKey.toString('hex'), 'utf8', 'hex')
    encryptedPrivateKey += cipher.final('hex')
    result.encryptedPrivateKey = encryptedPrivateKey
    result.salt = salt.toString('hex')
    // console.log({ encryptedPrivateKey })

    // // Now you can store `encryptedPrivateKey` in your database

    // // When you need the private key, you can decrypt it
    const decipher = require('crypto').createDecipheriv('aes-256-cbc', hash, Buffer.from(salt.toString('hex'), 'hex'))
    let decryptedPrivateKey = decipher.update(encryptedPrivateKey, 'hex', 'utf8')
    decryptedPrivateKey += decipher.final('utf8')
    // console.log({ decryptedPrivateKey, privKey: privKey.toString('hex') })
    return result
  }
}
