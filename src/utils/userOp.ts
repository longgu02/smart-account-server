import { Contract, ContractFactory, JsonRpcProvider, ethers } from 'ethers'
import { accountAbi } from 'src/constant/abis/abis/accountAbi'
import { entryPointAbi } from 'src/constant/abis/abis/entryPointAbi'
import { EP_ADDRESS, PM_ADDRESS } from 'src/constant/addresses'
import { UserOp } from 'src/types/interfaces'

export const fillUserOp = async (
  sender: string,
  Account: ContractFactory,
  entryPoint: Contract,
  initCode: string,
  callData: {
    receiver: string
    amount: BigInt
    data: string
  }
) => {
  const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
  const provider = new JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`)
  // Get addresses
  const epAddress: string = EP_ADDRESS
  const pmAddress: string = PM_ADDRESS
  // Fill user operation
  const userOp: UserOp = {
    sender, // smart account address
    nonce: '0x' + (await entryPoint.getNonce(sender, 0)).toString(16),
    initCode,
    callData: Account.interface.encodeFunctionData('execute', [callData.receiver, callData.amount, callData.data]),
    paymasterAndData: pmAddress,
    signature:
      '0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c'
  }

  // const { preVerificationGas, verificationGasLimit, callGasLimit } = await provider.send(
  //   'eth_estimateUserOperationGas',
  //   [userOp, epAddress]
  // )

  // userOp.preVerificationGas = preVerificationGas
  // userOp.verificationGasLimit = verificationGasLimit
  // userOp.callGasLimit = callGasLimit
  userOp.preVerificationGas = 900_000 * 4
  userOp.verificationGasLimit = 900_000 * 4
  userOp.callGasLimit = 900_000 * 4

  // const { maxFeePerGas } = await provider.getFeeData()
  // userOp.maxFeePerGas = '0x' + maxFeePerGas?.toString(16)
  userOp.maxFeePerGas = ethers.parseUnits('100', 'gwei')

  // const maxPriorityFeePerGas = await provider.send('rundler_maxPriorityFeePerGas', [])
  // userOp.maxPriorityFeePerGas = maxPriorityFeePerGas
  userOp.maxPriorityFeePerGas = ethers.parseUnits('50', 'gwei')

  return { userOp: userOp, userOpHash: await entryPoint.getUserOpHash(userOp) }
}
