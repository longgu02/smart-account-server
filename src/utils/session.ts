import { ethers } from 'ethers'
import { keccak256 } from 'ethereumjs-util'
import MerkleTree from 'merkletreejs'

const defaultAbiCoder = ethers.AbiCoder.defaultAbiCoder()

export const genMerkleTree = (
  sessionValidationModuleAddress: string,
  sessionData: { address: string; recipient: string; maxAmount: bigint }
) => {
  const data = ethers.concat([
    ethers.zeroPadValue('0x00', 6),
    ethers.zeroPadValue('0x00', 6),
    ethers.zeroPadValue(sessionValidationModuleAddress, 20),
    calculateNativeSessionKeyData(sessionData.address, sessionData.recipient, sessionData.maxAmount)
  ])

  console.log([
    ethers.zeroPadValue('0x00', 6),
    ethers.zeroPadValue('0x00', 6),
    ethers.zeroPadValue(sessionValidationModuleAddress, 20),
    calculateNativeSessionKeyData(sessionData.address, sessionData.recipient, sessionData.maxAmount)
  ])

  const merkleTree = new MerkleTree([ethers.keccak256(data), ethers.keccak256(data)], keccak256, {
    sortPairs: false,
    hashLeaves: false
  })

  console.log({
    hehe: merkleTree.getHexProof(ethers.keccak256(data)).toString(),
    merkleTree,
    data
  })

  return {
    merkleTree,
    data,
    proof: merkleTree.getHexProof(ethers.keccak256(data)).toString()
  }
}

export function calculateNativeSessionKeyData(sessionPublicKey: string, recipient: string, maxAmount: bigint) {
  return defaultAbiCoder.encode(['address', 'address', 'uint256'], [sessionPublicKey, recipient, maxAmount])
}
