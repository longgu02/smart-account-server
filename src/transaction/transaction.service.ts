import { Contract, ContractFactory, JsonRpcProvider, ethers } from 'ethers'
import { accountAbi } from 'src/constant/abis/abis/accountAbi'
import { entryPointAbi } from 'src/constant/abis/abis/entryPointAbi'
import { EP_ADDRESS, PM_ADDRESS } from 'src/constant/addresses'
import { UserOp } from 'src/types/interfaces'

export class TransactionService {
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
}
