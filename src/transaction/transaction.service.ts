import { Contract, ContractFactory, JsonRpcProvider, ethers } from 'ethers'
import { accountAbi } from 'src/constant/abis/abis/accountAbi'
import { entryPointAbi } from 'src/constant/abis/abis/entryPointAbi'
import { EP_ADDRESS, PM_ADDRESS } from 'src/constant/addresses'
import { UserOp } from 'src/types/interfaces'
import { fetchEtherscan, formatEtherscanResponse } from 'src/utils/etherscan'
import { fillUserOp } from 'src/utils/userOp'

export class TransactionService {
  async getAccountTxList(account: string) {
    const internalTxs = await fetchEtherscan({
      module: 'account',
      action: 'txlistinternal',
      address: account,
      startblock: 0,
      endblock: 99999999999999,
      sort: 'desc'
    })
    const externalTxs = await fetchEtherscan({
      module: 'account',
      action: 'txlist',
      address: account,
      startblock: 0,
      endblock: 99999999999999,
      sort: 'desc'
    })
    const result = [
      ...formatEtherscanResponse(internalTxs, 'internal'),
      ...formatEtherscanResponse(externalTxs, 'deposit')
    ]
    result.sort((a, b) => b.timeStamp - a.timeStamp)
    return result
  }
}
