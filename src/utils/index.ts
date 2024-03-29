// const crypto = require('crypto')

import { Wallet } from 'ethers'

export const getWalletAddress = (privateKey: string): string => {
  // Create a new Wallet instance
  const wallet = new Wallet(privateKey)

  // Get the wallet address
  const address = wallet.address

  return address
}
