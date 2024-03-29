import { Contract, ContractFactory, JsonRpcProvider, ethers } from 'ethers'
import { accountAbi } from 'src/constant/abis/abis/accountAbi'
import { entryPointAbi } from 'src/constant/abis/abis/entryPointAbi'
import { EP_ADDRESS, PM_ADDRESS } from 'src/constant/addresses'
import { UserOp } from 'src/types/interfaces'
import { fillUserOp } from 'src/utils/userOp'

export class TransactionService {
  async transfer() {
    const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
    const provider = new JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`)
    const signer = wallet.connect(provider)
    const Account = new ContractFactory(accountAbi, '0xd3e5b33d4e94ef7764b8a9341c1004df7ebbcd01', provider)
    const EPContract = new Contract(EP_ADDRESS, entryPointAbi, signer)

    // const userOp: UserOp = await fillUserOp(sender, Account, EPContract, initCode, {
    //   receiver: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    //   amount: ethers.parseEther('0'),
    //   data: '0x'
    // })
    // userOp.signature = await signer.signMessage(ethers.getBytes(userOpHash))

    // // const opHash = await provider.send('eth_sendUserOperation', [userOp, EP_ADDRESS])

    // let transactionHash
    // while (!transactionHash || transactionHash == null) {
    //   await provider.send('eth_getUserOperationByHash', [opHash]).then(res => {
    //     if (res != null) {
    //       transactionHash = res.transactionHash
    //     }
    //     // console.log(res);
    //   })
    // }
    // console.log(transactionHash)
  }
}
