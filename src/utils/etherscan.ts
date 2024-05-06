import { timeStamp } from 'console'

interface EtherscanParams {
  module?: string
  action?: string
  address?: string
  startblock?: number
  endblock?: number
  page?: number
  offset?: number
  sort?: 'asc' | 'desc'
}

const SEPOLIA_URL = 'https://api-sepolia.etherscan.io/api'

export const fetchEtherscan = async (params: EtherscanParams) => {
  console.log(
    `${SEPOLIA_URL}?${Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&')}&apiKey=${process.env.ETHERSCAN_API_KEY}`
  )
  const response = await fetch(
    `${SEPOLIA_URL}?${Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&')}&apiKey=${process.env.ETHERSCAN_API_KEY}`
  )
  return response.json()
}

export const formatEtherscanResponse = (response, type) => {
  const result = response.result
  const formatted = result.map(res => {
    if (res.contractAddress != '') {
      return {
        from: res.from,
        to: res.to,
        value: res.value,
        type: 'creation',
        timeStamp: res.timeStamp,
        hash: res.hash,
        gas: res.gas
      }
    }
    return {
      from: res.from,
      to: res.to,
      value: res.value,
      type: type,
      timeStamp: res.timeStamp,
      hash: res.hash,
      gas: res.gas
    }
  })
  return formatted
}
