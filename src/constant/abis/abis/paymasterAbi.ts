export const paymasterAbi = [
  {
    inputs: [
      {
        internalType: 'enum IPaymaster.PostOpMode',
        name: 'mode',
        type: 'uint8'
      },
      {
        internalType: 'bytes',
        name: 'context',
        type: 'bytes'
      },
      {
        internalType: 'uint256',
        name: 'actualGasCost',
        type: 'uint256'
      }
    ],
    name: 'postOp',
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
        name: '',
        type: 'tuple'
      },
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'validatePaymasterUserOp',
    outputs: [
      {
        internalType: 'bytes',
        name: 'context',
        type: 'bytes'
      },
      {
        internalType: 'uint256',
        name: 'validationData',
        type: 'uint256'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  }
]
