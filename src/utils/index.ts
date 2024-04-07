// const crypto = require('crypto')

import { JsonRpcProvider, Wallet } from 'ethers'

export const getWalletAddress = (privateKey: string): string => {
  // Create a new Wallet instance
  const wallet = new Wallet(privateKey)

  // Get the wallet address
  const address = wallet.address

  return address
}

export const getServerWalletWithProvider = () => {
  const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
  // const provider = new JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`)
  const provider = new JsonRpcProvider('http://localhost:8545')

  // Wallet
  // const privateKey = await this.decipherKey(keyHash, salt, password)
  const privateKey = process.env.PRIVATE_KEY

  const wallet = new Wallet(privateKey)
  const signer = wallet.connect(provider)
  return { signer, provider }
}
