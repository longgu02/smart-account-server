export const accountAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    stateMutability: 'payable',
    type: 'fallback'
  },
  {
    inputs: [],
    name: 'count',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'execute',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_to',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'addERC20',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      }
    ],
    name: 'sendERC20',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      }
    ],
    name: 'sendEther',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'sender',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256'
          },
          {
            internalType: 'bytes',
            name: 'initCode',
            type: 'bytes'
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes'
          },
          {
            internalType: 'uint256',
            name: 'callGasLimit',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'verificationGasLimit',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'preVerificationGas',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'maxFeePerGas',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'maxPriorityFeePerGas',
            type: 'uint256'
          },
          {
            internalType: 'bytes',
            name: 'paymasterAndData',
            type: 'bytes'
          },
          {
            internalType: 'bytes',
            name: 'signature',
            type: 'bytes'
          }
        ],
        internalType: 'struct UserOperation',
        name: 'userOp',
        type: 'tuple'
      },
      {
        internalType: 'bytes32',
        name: 'userOpHash',
        type: 'bytes32'
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'validateUserOp',
    outputs: [
      {
        internalType: 'uint256',
        name: 'validationData',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    stateMutability: 'payable',
    type: 'receive'
  }
]
