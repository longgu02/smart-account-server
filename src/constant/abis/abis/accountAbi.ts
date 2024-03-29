export const accountAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_initModuleAddress',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_entryPointAddress',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [],
    name: 'AlreadyInitialized',
    type: 'error'
  },
  {
    inputs: [],
    name: 'BaseImplementationCannotBeZero',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'caller',
        type: 'address'
      }
    ],
    name: 'CallerIsNotAnEntryPoint',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'caller',
        type: 'address'
      }
    ],
    name: 'CallerIsNotEntryPoint',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'caller',
        type: 'address'
      }
    ],
    name: 'CallerIsNotEntryPointOrOwner',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'caller',
        type: 'address'
      }
    ],
    name: 'CallerIsNotEntryPointOrSelf',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'caller',
        type: 'address'
      }
    ],
    name: 'CallerIsNotOwner',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'caller',
        type: 'address'
      }
    ],
    name: 'CallerIsNotSelf',
    type: 'error'
  },
  {
    inputs: [],
    name: 'DelegateCallsOnly',
    type: 'error'
  },
  {
    inputs: [],
    name: 'EntryPointCannotBeZero',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'implementationAddress',
        type: 'address'
      }
    ],
    name: 'InvalidImplementation',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'caller',
        type: 'address'
      }
    ],
    name: 'MixedAuthFail',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'module',
        type: 'address'
      }
    ],
    name: 'ModuleAlreadyEnabled',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'expectedModule',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'returnedModule',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'prevModule',
        type: 'address'
      }
    ],
    name: 'ModuleAndPrevModuleMismatch',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'module',
        type: 'address'
      }
    ],
    name: 'ModuleCannotBeZeroOrSentinel',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'module',
        type: 'address'
      }
    ],
    name: 'ModuleNotEnabled',
    type: 'error'
  },
  {
    inputs: [],
    name: 'ModulesAlreadyInitialized',
    type: 'error'
  },
  {
    inputs: [],
    name: 'ModulesSetupExecutionFailed',
    type: 'error'
  },
  {
    inputs: [],
    name: 'OwnerCanNotBeSelf',
    type: 'error'
  },
  {
    inputs: [],
    name: 'OwnerCannotBeZero',
    type: 'error'
  },
  {
    inputs: [],
    name: 'OwnerProvidedIsSame',
    type: 'error'
  },
  {
    inputs: [],
    name: 'TransferToZeroAddressAttempt',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'destLength',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'valueLength',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'funcLength',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'operationLength',
        type: 'uint256'
      }
    ],
    name: 'WrongBatchProvided',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'contractSignature',
        type: 'bytes'
      }
    ],
    name: 'WrongContractSignature',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'uintS',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'contractSignatureLength',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'signatureLength',
        type: 'uint256'
      }
    ],
    name: 'WrongContractSignatureFormat',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'moduleAddressProvided',
        type: 'address'
      }
    ],
    name: 'WrongValidationModule',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'module',
        type: 'address'
      }
    ],
    name: 'DisabledModule',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'module',
        type: 'address'
      }
    ],
    name: 'EnabledModule',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      },
      {
        indexed: false,
        internalType: 'enum Enum.Operation',
        name: 'operation',
        type: 'uint8'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'txGas',
        type: 'uint256'
      }
    ],
    name: 'ExecutionFailure',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'module',
        type: 'address'
      }
    ],
    name: 'ExecutionFromModuleFailure',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'module',
        type: 'address'
      }
    ],
    name: 'ExecutionFromModuleSuccess',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      },
      {
        indexed: false,
        internalType: 'enum Enum.Operation',
        name: 'operation',
        type: 'uint8'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'txGas',
        type: 'uint256'
      }
    ],
    name: 'ExecutionSuccess',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'module',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      },
      {
        indexed: false,
        internalType: 'enum Enum.Operation',
        name: 'operation',
        type: 'uint8'
      }
    ],
    name: 'ModuleTransaction',
    type: 'event'
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
    inputs: [
      {
        internalType: 'address',
        name: 'module',
        type: 'address'
      }
    ],
    name: 'enableModule',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'to',
        type: 'address[]'
      },
      {
        internalType: 'uint256[]',
        name: 'value',
        type: 'uint256[]'
      },
      {
        internalType: 'bytes[]',
        name: 'data',
        type: 'bytes[]'
      },
      {
        internalType: 'enum Enum.Operation[]',
        name: 'operations',
        type: 'uint8[]'
      }
    ],
    name: 'execBatchTransactionFromModule',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      },
      {
        internalType: 'enum Enum.Operation',
        name: 'operation',
        type: 'uint8'
      },
      {
        internalType: 'uint256',
        name: 'txGas',
        type: 'uint256'
      }
    ],
    name: 'execTransactionFromModule',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      },
      {
        internalType: 'enum Enum.Operation',
        name: 'operation',
        type: 'uint8'
      }
    ],
    name: 'execTransactionFromModule',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      },
      {
        internalType: 'enum Enum.Operation',
        name: 'operation',
        type: 'uint8'
      }
    ],
    name: 'execTransactionFromModuleReturnData',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool'
      },
      {
        internalType: 'bytes',
        name: 'returnData',
        type: 'bytes'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'dest',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: 'func',
        type: 'bytes'
      }
    ],
    name: 'execute',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'dest',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: 'func',
        type: 'bytes'
      }
    ],
    name: 'execute_ncC',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'start',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'pageSize',
        type: 'uint256'
      }
    ],
    name: 'getModulesPaginated',
    outputs: [
      {
        internalType: 'address[]',
        name: 'array',
        type: 'address[]'
      },
      {
        internalType: 'address',
        name: 'next',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'module',
        type: 'address'
      }
    ],
    name: 'isModuleEnabled',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
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
        internalType: 'address',
        name: 'setupContract',
        type: 'address'
      },
      {
        internalType: 'bytes',
        name: 'setupData',
        type: 'bytes'
      }
    ],
    name: 'setupAndEnableModule',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'signable',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
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
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    stateMutability: 'payable',
    type: 'receive'
  }
]
export const accountByteCode =
  '0x60c08060405234620000f1576060816200130380380380916200002382856200010b565b833981010312620000f157806200003c60249262000145565b9060206200005a60406200005283850162000145565b930162000145565b60405162bb78ef60e61b81526001600160a01b0394851660048201529394909392839190829060009088165af18015620000ff57620000b9575b50166080523060a0526040516111a890816200015b823960805181505060a051815050f35b6020813d602011620000f6575b81620000d5602093836200010b565b81010312620000f157620000e99062000145565b503862000094565b600080fd5b3d9150620000c6565b6040513d6000823e3d90fd5b601f909101601f19168101906001600160401b038211908210176200012f57604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620000f15756fe60806040526004361015610018575b361561001657005b005b60003560e01c8061189a146100ba57806306661abd146100f157806321632045146100ec5780632d9ad53d146100e75780633a871cdd146100e2578063468721a7146100dd5780635229073f146100d85780635305dd27146100d3578063610b5925146100ce57806361c41934146100c95780638da5cb5b146100c4578063acfdf503146100bf578063b61d27f6146100ba5763cc2f84520361000e5761082e565b610119565b610732565b6106da565b610697565b610672565b61057e565b610537565b6104d3565b610363565b610306565b610249565b61017f565b6001600160a01b0381160361010757565b600080fd5b3590610117826100f6565b565b3461010757606036600319011261010757600435610136816100f6565b6044359067ffffffffffffffff9081831161010757366023840112156101075782600401359182116101075736602483850101116101075760246100169301906024359061093c565b34610107576000366003190112610107576020601954604051908152f35b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff8211176101d557604052565b61019d565b92919267ffffffffffffffff82116101d55760405191610204601f8201601f1916602001846101b3565b829481845281830111610107578281602093846000960137010152565b9080601f830112156101075781602061023c933591016101da565b90565b6002111561010757565b346101075760a036600319011261010757600435610266816100f6565b60443567ffffffffffffffff811161010757610286903690600401610221565b90606435906102948261023f565b608435916001331480156102e7575b6102d0576020936102c093806102ca57505a925b60243590610dc0565b6040519015158152f35b926102b7565b60246040516321ac7c5f60e01b8152336004820152fd5b503360005260006020526001600160a01b0360406000205416156102a3565b34610107576020366003190112610107576020600435610325816100f6565b6001600160a01b038091169081600114159182610349575b50506040519015158152f35b90915060005260008252604060002054161515388061033d565b34610107576003196060368201126101075767ffffffffffffffff906004358281116101075761016081600401928236030112610107576101446103a89101826109a4565b810191604082840312610107578135938411610107576001600160a01b036020836103db829660009861042b9701610221565b5001356103e7816100f6565b16906103f282610e7e565b6040519485809481937ffff35b720000000000000000000000000000000000000000000000000000000083526024359060048401610a39565b03925af180156104855761045291600091610456575b506040519081529081906020820190565b0390f35b610478915060203d60201161047e575b61047081836101b3565b8101906109d7565b38610441565b503d610466565b610b30565b6080600319820112610107576004356104a2816100f6565b91602435916044359067ffffffffffffffff8211610107576104c691600401610221565b9060643561023c8161023f565b346101075760206102c06104e63661048a565b92919091610967565b60005b8381106105025750506000910152565b81810151838201526020016104f2565b9060209161052b815180928185528580860191016104ef565b601f01601f1916010190565b34610107576105486104e63661048a565b6040519060203d8301016040523d82523d6000602084013e61045260405192839215158352604060208401526040830190610512565b346101075760403660031901126101075760043561059b816100f6565b60243567ffffffffffffffff8111610107576105bb903690600401610221565b906001600160a01b0381161561061457600082819282602083519301915af1604051903d6000833e156106105761045290516105f681610eef565b6040516001600160a01b0390911681529081906020820190565b3d90fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f57726f6e67204d6f64756c6520536574757020416464726573730000000000006044820152fd5b3461010757602036600319011261010757610016600435610692816100f6565b610eef565b34610107576020366003190112610107576001600160a01b036004356106bc816100f6565b16600052601b602052602060ff604060002054166040519015158152f35b346101075760003660031901126101075760206001600160a01b03601a5416604051908152f35b9181601f840112156101075782359167ffffffffffffffff8311610107576020808501948460051b01011161010757565b346101075760803660031901126101075767ffffffffffffffff60043581811161010757610764903690600401610701565b6024929192358281116101075761077f903690600401610701565b6044949194358481116101075761079a903690600401610701565b9160643595861161010757610452966107ba6107c2973690600401610701565b969095610b96565b60405190151581529081906020820190565b909291926040820190604083528051809252606083019160208092019160005b82811061081157505050506001600160a01b036020919416910152565b83516001600160a01b0316855293810193928101926001016107f4565b346101075760403660031901126101075760043561084b816100f6565b60243561085781610d13565b61086460405191826101b3565b818152601f1961087383610d13565b013660208301376108a961089c6000946001600160a01b03166000526000602052604060002090565b546001600160a01b031690565b6001600160a01b0381168015159081610930575b5080610927575b156109145761090861089c826108ef61090e946108e18988610d2b565b906001600160a01b03169052565b6001600160a01b03166000526000602052604060002090565b93610d3f565b926108a9565b90838152610452604051928392836107d4565b508284106108c4565b600191501415386108bd565b61094c60009493859436916101da565b91602083519301915af1604051903d6000833e156106105750565b91929092600133148015610985575b6102d05761023c935a93610dc0565b503360005260006020526001600160a01b036040600020541615610976565b903590601e1981360301821215610107570180359067ffffffffffffffff82116101075760200191813603831361010757565b90816020910312610107575190565b9035601e198236030181121561010757016020813591019167ffffffffffffffff821161010757813603831361010757565b908060209392818452848401376000828201840152601f01601f1916010190565b929190610b2b610a9660209260408752610a6660408801610a598361010c565b6001600160a01b03169052565b838101356060880152610b1b610a7f60408301836109e6565b9390610160948560808c01526101a08b0191610a18565b91610b12610abe610aaa60608401846109e6565b603f198d8803810160a08f01529691610a18565b608083013560c08c015260a083013560e08c01528a6101009660c085013588830152610b0261012060e087013581850152610140998701358a8501528601866109e6565b9290918882860301910152610a18565b938101906109e6565b9188840301610180890152610a18565b930152565b6040513d6000823e3d90fd5b634e487b7160e01b600052603260045260246000fd5b9190811015610b625760051b0190565b610b3c565b3561023c816100f6565b90821015610b6257610b889160051b8101906109a4565b9091565b3561023c8161023f565b9497969391929795909560009887158015610d09575b8015610cff575b8015610cf5575b610cad57600197600133148015610c7d575b610c655797969594939291906000985b808a10610bef5750505050505050505050565b9091929394959697899b50610c55888888610c4f89869f8f81610c3a818e610c338f968f97610c2d610c2883610c479b610c429b610b52565b610b67565b9c610b52565b3598610b71565b989094610b52565b610b8c565b9436916101da565b916110a3565b9b01989796959493929190610bdc565b6040516321ac7c5f60e01b8152336004820152602490fd5b506001600160a01b03610ca661089c336001600160a01b03166000526000602052604060002090565b1615610bcc565b6040517f470c35570000000000000000000000000000000000000000000000000000000081526004810189905260248101919091526044810182905260648101869052608490fd5b5085821415610bba565b5081811415610bb3565b5080881415610bac565b67ffffffffffffffff81116101d55760051b60200190565b8051821015610b625760209160051b010190565b6000198114610d4e5760010190565b634e487b7160e01b600052601160045260246000fd5b610d7c906020604051928284809451938492016104ef565b810103902090565b906002821015610d915752565b634e487b7160e01b600052602160045260246000fd5b60209093929193610dbc816040810196610d84565b0152565b9493929091946002821015610d915760018203610e6b576000808751602089018488f4955b8615610e35577f81d12fffced46c214dfae8ab8fa0b9f7b69f70c9d500e33f612f2105deb261ee91610e30610e216001600160a01b0393610d64565b96604051938493169583610da7565b0390a4565b7f3ddd038f78c876172d5dbfd730b14c9f8692dfa197ef104eaac6df3f85a0874a91610e30610e216001600160a01b0393610d64565b600080875160208901868589f195610de5565b604051906001600160a01b0360208301917f2c2ecbc200000000000000000000000000000000000000000000000000000000835216602483015260248252606082019082821067ffffffffffffffff8311176101d557600092839260405251906a636f6e736f6c652e6c6f675afa50565b6001600160a01b0381168015908115611098575b5061105c57610f37610f2b61089c836001600160a01b03166000526000602052604060002090565b6001600160a01b031690565b61102057600160009081526020527fecdf3a3effea5783a3c4c2140e677577666428d44ed9d474a0b3a4c9943f84409061101b90610fe7610f977fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d61089c565b610fb4836001600160a01b03166000526000602052604060002090565b906001600160a01b03167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b600160009081526020526105f6817fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d610fb4565b0390a1565b6040517fb29d45950000000000000000000000000000000000000000000000000000000081526001600160a01b03919091166004820152602490fd5b6040517fcadb248f0000000000000000000000000000000000000000000000000000000081526001600160a01b03919091166004820152602490fd5b600191501438610f03565b9392936110b35a86858585610dc0565b9485156111465761111b6111107f8c014e41cffd68ba64f3e7830b8b2e4ee860509d8deab25ebbcbba2f0405e2da956001600160a01b0395604051968796338852166020870152604086015260a0606086015260a0850190610512565b916080840190610d84565b0390a1337f6895c13664aa4f67288b25d7a21d7aaa34916e355fb9b6fae0a139a9085becb8600080a2565b50505050337facd2c8702804128fdb0db2bb49f6d127dd0181c13fd45dbfe16de0930e2bd375600080a256fea26469706673582212209137442b5998d3e63f77f0dbfa0fb0a17b7c656dbce536041bcd5bdca572940064736f6c63430008180033'
