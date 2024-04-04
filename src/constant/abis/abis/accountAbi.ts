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
    name: 'AlreadyInitializing',
    type: 'error'
  },
  {
    inputs: [],
    name: 'AlwaysDenyRule',
    type: 'error'
  },
  {
    inputs: [],
    name: 'ArrayLengthMismatch',
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
        name: 'plugin',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'target',
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
      }
    ],
    name: 'ExecFromPluginExternalNotPermitted',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'plugin',
        type: 'address'
      },
      {
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4'
      }
    ],
    name: 'ExecFromPluginNotPermitted',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4'
      }
    ],
    name: 'ExecutionFunctionAlreadySet',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidDependenciesProvided',
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
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'InvalidPluginManifest',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'plugin',
        type: 'address'
      }
    ],
    name: 'ManifestDiscrepancy',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'dependency',
        type: 'address'
      }
    ],
    name: 'MissingPluginDependency',
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
    inputs: [
      {
        internalType: 'address',
        name: 'plugin',
        type: 'address'
      }
    ],
    name: 'NativeTokenSpendingNotPermitted',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NullFunctionReference',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NullPlugin',
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
    inputs: [
      {
        internalType: 'address',
        name: 'plugin',
        type: 'address'
      }
    ],
    name: 'PluginAlreadyInstalled',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'plugin',
        type: 'address'
      }
    ],
    name: 'PluginDependencyViolation',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'plugin',
        type: 'address'
      }
    ],
    name: 'PluginExecutionDenied',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'plugin',
        type: 'address'
      },
      {
        internalType: 'bytes',
        name: 'revertReason',
        type: 'bytes'
      }
    ],
    name: 'PluginInstallCallbackFailed',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'plugin',
        type: 'address'
      }
    ],
    name: 'PluginInterfaceNotSupported',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'plugin',
        type: 'address'
      }
    ],
    name: 'PluginNotInstalled',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'plugin',
        type: 'address'
      },
      {
        internalType: 'uint8',
        name: 'functionId',
        type: 'uint8'
      },
      {
        internalType: 'bytes',
        name: 'revertReason',
        type: 'bytes'
      }
    ],
    name: 'PostExecHookReverted',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'plugin',
        type: 'address'
      },
      {
        internalType: 'uint8',
        name: 'functionId',
        type: 'uint8'
      },
      {
        internalType: 'bytes',
        name: 'revertReason',
        type: 'bytes'
      }
    ],
    name: 'PreExecHookReverted',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4'
      },
      {
        internalType: 'FunctionReference',
        name: 'validationFunction',
        type: 'bytes21'
      }
    ],
    name: 'RuntimeValidationFunctionAlreadySet',
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
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4'
      }
    ],
    name: 'UnrecognizedFunction',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4'
      },
      {
        internalType: 'FunctionReference',
        name: 'validationFunction',
        type: 'bytes21'
      }
    ],
    name: 'UserOpValidationFunctionAlreadySet',
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
        indexed: true,
        internalType: 'contract IEntryPoint',
        name: 'entryPoint',
        type: 'address'
      }
    ],
    name: 'ModularAccountInitialized',
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'plugin',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'manifestHash',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'FunctionReference[]',
        name: 'dependencies',
        type: 'bytes21[]'
      }
    ],
    name: 'PluginInstalled',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'plugin',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'bool',
        name: 'onUninstallSucceeded',
        type: 'bool'
      }
    ],
    name: 'PluginUninstalled',
    type: 'event'
  },
  {
    stateMutability: 'payable',
    type: 'fallback'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pluginAddress',
        type: 'address'
      }
    ],
    name: 'checkPluginInstalled',
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
        internalType: 'address[]',
        name: 'dest',
        type: 'address[]'
      },
      {
        internalType: 'uint256[]',
        name: 'value',
        type: 'uint256[]'
      },
      {
        internalType: 'bytes[]',
        name: 'func',
        type: 'bytes[]'
      }
    ],
    name: 'executeBatch',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'dest',
        type: 'address[]'
      },
      {
        internalType: 'uint256[]',
        name: 'value',
        type: 'uint256[]'
      },
      {
        internalType: 'bytes[]',
        name: 'func',
        type: 'bytes[]'
      }
    ],
    name: 'executeBatch_y6U',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }
    ],
    name: 'executeFromPlugin',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes'
      }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
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
      }
    ],
    name: 'executeFromPluginExternal',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes'
      }
    ],
    stateMutability: 'payable',
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
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4'
      }
    ],
    name: 'getExecutionFunctionConfig',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'plugin',
            type: 'address'
          },
          {
            internalType: 'FunctionReference',
            name: 'userOpValidationFunction',
            type: 'bytes21'
          },
          {
            internalType: 'FunctionReference',
            name: 'runtimeValidationFunction',
            type: 'bytes21'
          }
        ],
        internalType: 'struct IAccountLoupe.ExecutionFunctionConfig',
        name: 'config',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4'
      }
    ],
    name: 'getExecutionHooks',
    outputs: [
      {
        components: [
          {
            internalType: 'FunctionReference',
            name: 'preExecHook',
            type: 'bytes21'
          },
          {
            internalType: 'FunctionReference',
            name: 'postExecHook',
            type: 'bytes21'
          }
        ],
        internalType: 'struct IAccountLoupe.ExecutionHooks[]',
        name: 'execHooks',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getInstalledPlugins',
    outputs: [
      {
        internalType: 'address[]',
        name: 'pluginAddresses',
        type: 'address[]'
      }
    ],
    stateMutability: 'view',
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
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4'
      }
    ],
    name: 'getPreValidationHooks',
    outputs: [
      {
        internalType: 'FunctionReference[]',
        name: 'preUserOpValidationHooks',
        type: 'bytes21[]'
      },
      {
        internalType: 'FunctionReference[]',
        name: 'preRuntimeValidationHooks',
        type: 'bytes21[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'plugins',
        type: 'address[]'
      },
      {
        internalType: 'bytes32[]',
        name: 'manifestHashes',
        type: 'bytes32[]'
      },
      {
        internalType: 'bytes[]',
        name: 'pluginInstallDatas',
        type: 'bytes[]'
      }
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'plugin',
        type: 'address'
      },
      {
        internalType: 'bytes32',
        name: 'manifestHash',
        type: 'bytes32'
      },
      {
        internalType: 'bytes',
        name: 'pluginInstallData',
        type: 'bytes'
      },
      {
        internalType: 'FunctionReference[]',
        name: 'dependencies',
        type: 'bytes21[]'
      }
    ],
    name: 'installPlugin',
    outputs: [],
    stateMutability: 'nonpayable',
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
        name: 'plugin',
        type: 'address'
      },
      {
        internalType: 'bytes',
        name: 'config',
        type: 'bytes'
      },
      {
        internalType: 'bytes',
        name: 'pluginUninstallData',
        type: 'bytes'
      }
    ],
    name: 'uninstallPlugin',
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
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    stateMutability: 'payable',
    type: 'receive'
  }
]

export const accountByteCode =
  '0x60c08060405234620000f4576060816200516a80380380916200002382856200010e565b833981010312620000f457806200003c60249262000148565b9060206200005a60406200005283850162000148565b930162000148565b60405162bb78ef60e61b81526001600160a01b0394851660048201529394909392839190829060009088165af180156200010257620000bc575b50166080523060a05260405161500c90816200015e823960805181611c04015260a051815050f35b6020813d602011620000f9575b81620000d8602093836200010e565b81010312620000f457620000ec9062000148565b503862000094565b600080fd5b3d9150620000c9565b6040513d6000823e3d90fd5b601f909101601f19168101906001600160401b038211908210176200013257604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620000f45756fe60806040526004361015610018575b361561001657005b005b60003560e01c8061189a1461012a578061468014610157578063216320451461017a578063229e588f146101755780632d9ad53d1461017057806338997b111461016b5780633a0cac56146101665780633a871cdd14610161578063468721a71461015c57806347e1da2a146101575780635229073f146101525780635305dd271461014d578063610b592514610148578063642f9dd414610143578063669e2f6b1461013e5780638d1121841461013957806394ed11e714610134578063acfdf5031461012f578063b61d27f61461012a578063c1a221f314610125578063c5f0e8d114610120578063cc2f84521461011b5763ceaf13090361000e57611903565b6117c4565b6116cf565b611590565b610210565b6114ee565b611342565b6110f1565b611092565b610e9c565b610e0d565b610d19565b610cd2565b610266565b610cb6565b610b4a565b610a9d565b6107e7565b610731565b61066b565b6104b6565b6001600160a01b0381160361019057565b600080fd5b35906101a08261017f565b565b9181601f840112156101905782359167ffffffffffffffff8311610190576020838186019501011161019057565b6060600319820112610190576004356101e88161017f565b91602435916044359067ffffffffffffffff82116101905761020c916004016101a2565b9091565b346101905761001661022f610224366101d0565b939192933691610457565b9161296c565b9181601f840112156101905782359167ffffffffffffffff8311610190576020808501948460051b01011161019057565b346101905760603660031901126101905767ffffffffffffffff60043581811161019057610298903690600401610235565b90602435838111610190576102b1903690600401610235565b93604435908111610190576102ca903690600401610235565b9284158015610362575b8015610358575b61032c5760005b8581106102eb57005b806103256103046102ff6001948a876119c4565b6119d9565b61030f838b896119c4565b3561022f61031e858b8a611a16565b3691610457565b50016102e2565b5050506084926040519263470c355760e01b845260048401526024830152604482015260006064820152fd5b50838614156102db565b50858514156102d4565b634e487b7160e01b600052604160045260246000fd5b610180810190811067ffffffffffffffff82111761039f57604052565b61036c565b6040810190811067ffffffffffffffff82111761039f57604052565b6060810190811067ffffffffffffffff82111761039f57604052565b67ffffffffffffffff811161039f57604052565b6020810190811067ffffffffffffffff82111761039f57604052565b90601f8019910116810190811067ffffffffffffffff82111761039f57604052565b604051906101a082610382565b67ffffffffffffffff811161039f57601f01601f191660200190565b9291926104638261043b565b91610471604051938461040c565b829481845281830111610190578281602093846000960137010152565b9080601f83011215610190578160206104a993359101610457565b90565b6002111561019057565b346101905760a0366003190112610190576004356104d38161017f565b60443567ffffffffffffffff8111610190576104f390369060040161048e565b9060643590610501826104ac565b60843591600133148015610554575b61053d5760209361052d938061053757505a925b602435906129dc565b6040519015158152f35b92610524565b60246040516321ac7c5f60e01b8152336004820152fd5b503360005260006020526001600160a01b036040600020541615610510565b67ffffffffffffffff811161039f5760051b60200190565b9080601f830112156101905760209082356105a581610573565b936105b3604051958661040c565b81855260208086019260051b82010192831161019057602001905b8282106105dc575050505090565b813581529083019083016105ce565b81601f820112156101905780359160209161060584610573565b93610613604051958661040c565b808552838086019160051b8301019280841161019057848301915b84831061063e5750505050505090565b823567ffffffffffffffff81116101905786916106608484809489010161048e565b81520192019161062e565b346101905760603660031901126101905767ffffffffffffffff60043581811161019057366023820112156101905780600401356106a881610573565b916106b6604051938461040c565b8183526020916024602085019160051b8301019136831161019057602401905b828210610718578585602435828111610190576106f790369060040161058b565b604435928311610190576107126100169336906004016105eb565b91611a6a565b83809183356107268161017f565b8152019101906106d6565b346101905760203660031901126101905760206004356107508161017f565b6001600160a01b038091169081600114159182610774575b50506040519015158152f35b909150600052600082526040600020541615153880610768565b60005b8381106107a15750506000910152565b8181015183820152602001610791565b906020916107ca8151809281855285808601910161078e565b601f01601f1916010190565b9060206104a99281815201906107b1565b6107f0366101d0565b6107fd8183959495611ca1565b84151580610a4c575b80610a12575b6109e15761087261086b85610853336001600160a01b03166000527f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e46602052604060002090565b906001600160a01b0316600052602052604060002090565b5460ff1690565b9081610918575b5080156108e5575b156108aa579261022f61089a93926108a6953691610457565b604051918291826107d6565b0390f35b6108e1916040519485947f808e3b3c0000000000000000000000000000000000000000000000000000000086523360048701611cee565b0390fd5b5061091361086b336001600160a01b0316600052600080516020614f97833981519152602052604060002090565b610881565b905061096761095d85610853336001600160a01b03166000527f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e46602052604060002090565b5460081c60ff1690565b908115610976575b5038610879565b6109db915061086b9060016109c187610853336001600160a01b03166000527f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e46602052604060002090565b01906001600160e01b031916600052602052604060002090565b3861096f565b6040517f2e36404e000000000000000000000000000000000000000000000000000000008152336004820152602490fd5b50610a47610a4361095d336001600160a01b0316600052600080516020614f97833981519152602052604060002090565b1590565b61080c565b50348511610806565b600091031261019057565b90815180825260208080930193019160005b828110610a80575050505090565b83516001600160a01b031685529381019392810192600101610a72565b3461019057600036600319011261019057604051807f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e419182548082526020809201936000527fcb3ee1351fe181fba9983de0b72f04b53b02f83e27cefacf502e357c21a9fe5d916000905b828210610b33576108a685610b1f8189038261040c565b604051918291602083526020830190610a60565b835486529485019460019384019390910190610b08565b34610190576003196060368201126101905767ffffffffffffffff90600435828111610190576101608160040192823603011261019057610144610b8f9101826119e3565b810191604082840312610190578135938411610190576001600160a01b03602083610bc28296600098610c12970161048e565b500135610bce8161017f565b1690610bd9826133c6565b6040519485809481937ffff35b720000000000000000000000000000000000000000000000000000000083526024359060048401611d5e565b03925af18015610c68576108a691600091610c39575b506040519081529081906020820190565b610c5b915060203d602011610c61575b610c53818361040c565b810190611d1d565b38610c28565b503d610c49565b611e55565b608060031982011261019057600435610c858161017f565b91602435916044359067ffffffffffffffff821161019057610ca99160040161048e565b906064356104a9816104ac565b3461019057602061052d610cc936610c6d565b92919091611a2d565b3461019057610ce3610cc936610c6d565b6040519060203d8301016040523d82523d6000602084013e6108a6604051928392151583526040602084015260408301906107b1565b3461019057604036600319011261019057600435610d368161017f565b60243567ffffffffffffffff811161019057610d5690369060040161048e565b906001600160a01b03811615610daf57600082819282602083519301915af1604051903d6000833e15610dab576108a69051610d9181613423565b6040516001600160a01b0390911681529081906020820190565b3d90fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f57726f6e67204d6f64756c6520536574757020416464726573730000000000006044820152fd5b3461019057602036600319011261019057610016600435610e2d8161017f565b613423565b6001600160e01b031981160361019057565b60208082019080835283518092528060408094019401926000905b838210610e6e57505050505090565b845180516001600160581b031990811688529084015116868401529485019493820193600190910190610e5f565b346101905760208060031936011261019057610ee4600435610ebd81610e32565b6001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b600981018054600d8301938454918260005b8281106110675750610f0790611e61565b94600094600c869201915b838110610f8357505050506000945b828610610f3957838552604051806108a68782610e44565b909192610f74610f498784614854565b506001600160581b03191684610f5f8489611b8b565b5101906affffffffffffffffffffff19169052565b60019586019501929190610f21565b610f9281839a9697989a614854565b506001600160581b03199081166000818152602086905260409020549091811561104a5791906000925b818410610fd657505050506001905b019795949397610f12565b9091929b61103b8c8b8f8486611033610f5f9361102e8f8d9061101182610ffd898d611b8b565b51906affffffffffffffffffffff19169052565b906affffffffffffffffffffff1916600052602052604060002090565b614854565b501693611b8b565b60018091019c01929190610fbc565b5050896110606001939b92610ffd85948d611b8b565b0198610fcb565b90611079828799959697989498614854565b9190506001918291010191019694939296959195610ef6565b34610190576020366003190112610190576001600160a01b036004356110b78161017f565b166000527f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e4260205260206040600020541515604051908152f35b34610190576020366003190112610190576108a660043561111181610e32565b6111de6111cd60026111b4611124611ec4565b946001600160e01b031981167fb61d27f6000000000000000000000000000000000000000000000000000000008114908115611318575b81156112ee575b81156112c4575b811561129a575b8115611270575b5015611220573086525b610ebd6111bc60016111b4846001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b015460581b90565b6001600160581b0319166020880152565b6001600160581b0319166040830152565b60405191829182919091604060608201936001600160a01b038151168352816020820151916affffffffffffffffffffff198093166020860152015116910152565b61126b61125e611251836001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b546001600160a01b031690565b6001600160a01b03168752565b611181565b7fc1a221f30000000000000000000000000000000000000000000000000000000091501438611177565b7fc5f0e8d10000000000000000000000000000000000000000000000000000000081149150611170565b7f4f1ef2860000000000000000000000000000000000000000000000000000000081149150611169565b7f3659cfe60000000000000000000000000000000000000000000000000000000081149150611162565b7f34fcd5be000000000000000000000000000000000000000000000000000000008114915061115b565b60203660031901126101905760043567ffffffffffffffff81116101905761136e9036906004016101a2565b9061138261137c8383611ee3565b90611ca1565b906113ee610a4361086b3360601b6bffffffffffffffffffffffff191660a086901c6bffffffff000000000000000016175b67ffffffffffffffff19166000527f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e45602052604060002090565b6114ad57611420611251836001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b916001600160a01b03831615611470576000808486828661144660405180948193611ef1565b03925af1611452611eff565b9015611468576108a690604051918291826107d6565b602081519101fd5b6040517ffcfc5aad0000000000000000000000000000000000000000000000000000000081526001600160e01b0319919091166004820152602490fd5b6040517fe85f2f3e0000000000000000000000000000000000000000000000000000000081523360048201526001600160e01b031983166024820152604490fd5b346101905760803660031901126101905767ffffffffffffffff60043581811161019057611520903690600401610235565b6024929192358281116101905761153b903690600401610235565b60449491943584811161019057611556903690600401610235565b91606435958611610190576108a69661157661157e973690600401610235565b969095611f4f565b60405190151581529081906020820190565b3461019057606080600319360112610190576004356115ae8161017f565b67ffffffffffffffff602435818111610190576115cf9036906004016101a2565b91604435908111610190576115e89036906004016101a2565b9290946000906101606040516115fd81610382565b82815282602082015282604082015282808201528360808201528360a08201528260c08201528260e0820152826101008201528261012082015282610140820152015281151560001461166d57509361165f82610016966116679401906127d3565b923691610457565b9161374c565b91505060405193630c77631360e41b855281856004816001600160a01b0388165afa8015610c6857610016958361166794926116ac575b50509261031e565b6116c892503d8091833e6116c0818361040c565b810190612396565b38806116a4565b34610190576080366003190112610190576004356116ec8161017f565b67ffffffffffffffff906044358281116101905761170e9036906004016101a2565b9190926064359081116101905761172c611736913690600401610235565b9490933691610457565b9061174084610573565b9261174e604051948561040c565b848452602094602085019060051b82019136831161019057905b82821061177d57610016868660243587612b8d565b81356001600160581b031981168103610190578152908601908601611768565b906001600160a01b036117bd602092959495604085526040850190610a60565b9416910152565b34610190576040366003190112610190576004356117e18161017f565b6024356117ed81610573565b6117fa604051918261040c565b818152601f1961180983610573565b013660208301376118326112516000946001600160a01b03166000526000602052604060002090565b6001600160a01b03811680151590816118b9575b50806118b0575b1561189d57611891611251826118786118979461186a8988611b8b565b906001600160a01b03169052565b6001600160a01b03166000526000602052604060002090565b93612958565b92611832565b908381526108a66040519283928361179d565b5082841061184d565b60019150141538611846565b90815180825260208080930193019160005b8281106118e5575050505090565b83516001600160581b031916855293810193928101926001016118d7565b34610190576020366003190112610190576119a060043561192381610e32565b6108a661198c600661195e611964600361195e876001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b01613d52565b946001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b6040519384936040855260408501906118c5565b9083820360208501526118c5565b634e487b7160e01b600052603260045260246000fd5b91908110156119d45760051b0190565b6119ae565b356104a98161017f565b903590601e1981360301821215610190570180359067ffffffffffffffff82116101905760200191813603831361019057565b908210156119d45761020c9160051b8101906119e3565b91929092600133148015611a4b575b61053d576104a9935a936129dc565b503360005260006020526001600160a01b036040600020541615611a3c565b917f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e409182549360ff8560081c161594858096611b6b575b8015611b54575b15611b2a5760ff1916600117909355611ac59284611af757611b9f565b611acb57565b7f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e40805461ff0019169055565b7f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e40805461ff001916610100179055611b9f565b60046040517f0dc149f0000000000000000000000000000000000000000000000000000000008152fd5b50303b158015611aa85750600160ff821614611aa8565b50600160ff821610611aa1565b6060518110156119d45760051b60800190565b80518210156119d45760209160051b010190565b9182519180518314801590611c96575b611c6c5760405191611bc0836103f0565b60009485845285368137855b858110611c29575050505050507f9f08b8dca66d3393166c297eebdbe382963a15cce40f3a2f4bf32378553fe65a6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169180a2565b80611c6686611c4a611c3d60019587611b8b565b516001600160a01b031690565b611c548489611b8b565b51611c5f8589611b8b565b5191612b8d565b01611bcc565b60046040517fa24a13a6000000000000000000000000000000000000000000000000000000008152fd5b508151831415611baf565b6001600160e01b03199035818116939260048110611cbe57505050565b60040360031b82901b16169150565b908060209392818452848401376000828201840152601f01601f1916010190565b90926104a995936080936001600160a01b03809216845216602083015260408201528160608201520191611ccd565b90816020910312610190575190565b9035601e198236030181121561019057016020813591019167ffffffffffffffff821161019057813603831361019057565b929190611e50611dbb60209260408752611d8b60408801611d7e83610195565b6001600160a01b03169052565b838101356060880152611e40611da46040830183611d2c565b9390610160948560808c01526101a08b0191611ccd565b91611e37611de3611dcf6060840184611d2c565b603f198d8803810160a08f01529691611ccd565b608083013560c08c015260a083013560e08c01528a6101009660c085013588830152611e2761012060e087013581850152610140998701358a850152860186611d2c565b9290918882860301910152611ccd565b93810190611d2c565b9188840301610180890152611ccd565b930152565b6040513d6000823e3d90fd5b90611e6b82610573565b604090611e7b604051918261040c565b8381528093611e8c601f1991610573565b019160009060005b848110611ea2575050505050565b6020908251611eb0816103a4565b848152828581830152828701015201611e94565b60405190611ed1826103c0565b60006040838281528260208201520152565b906004116101905790600490565b908092918237016000815290565b3d15611f2a573d90611f108261043b565b91611f1e604051938461040c565b82523d6000602084013e565b606090565b634e487b7160e01b600052602160045260246000fd5b356104a9816104ac565b94979693919297959095600098871580156120a4575b801561209a575b8015612090575b61206157600197600133148015612031575b6120195797969594939291906000985b808a10611fa85750505050505050505050565b9091929394959697899b5061200988888861200389869f8f81611fee818e611fe78f968f97611fe16102ff83611ffb9b611ff69b6119c4565b9c6119c4565b3598611a16565b9890946119c4565b611f45565b943691610457565b916135cc565b9b01989796959493929190611f95565b6040516321ac7c5f60e01b8152336004820152602490fd5b506001600160a01b0361205a611251336001600160a01b03166000526000602052604060002090565b1615611f85565b60405163470c355760e01b81526004810189905260248101919091526044810182905260648101869052608490fd5b5085821415611f73565b5081811415611f6c565b5080881415611f65565b9080601f83011215610190578151906020916120c981610573565b936120d7604051958661040c565b81855260208086019260051b82010192831161019057602001905b828210612100575050505090565b838091835161210e81610e32565b8152019101906120f2565b8015150361019057565b51906101a082612119565b81601f820112156101905780519160209161214884610573565b93604092612159604051968761040c565b818652848087019260051b8401019381851161019057858401925b858410612185575050505050505090565b835167ffffffffffffffff9081811161019057860191606080601f198588030112610190578451906121b6826103c0565b8a8501516121c38161017f565b8252858501516121d281612119565b8b830152840151928311610190576121f1868b809695819601016120ae565b85820152815201930192612174565b6005111561019057565b60ff81160361019057565b91908260609103126101905760405161222d816103c0565b6040808294805161223d81612200565b8452602081015161224d8161220a565b60208501520151910152565b9080601f8301121561019057815191602061227384610573565b93604093612284604051968761040c565b818652828087019260071b85010193818511610190578301915b8483106122ae5750505050505090565b608083830312610190578360809187516122c7816103a4565b85516122d281610e32565b81526122e085848801612215565b8382015281520192019161229e565b81601f8201121561019057805190602061230883610573565b93604090612319604051968761040c565b848652828601918360e080970286010194828611610190578401925b858410612346575050505050505090565b868484031261019057848791835161235d816103c0565b865161236881610e32565b815261237686848901612215565b838201526123878660808901612215565b85820152815201930192612335565b60208183031261019057805167ffffffffffffffff91828211610190570161018081840312610190576123c761042e565b92815183811161019057816123dd9184016120ae565b8452602082015183811161019057816123f79184016120ae565b6020850152604082015183811161019057816124149184016120ae565b6040850152606082015183811161019057816124319184016120ae565b606085015261244260808301612123565b608085015261245360a08301612123565b60a085015260c0820151838111610190578161247091840161212e565b60c085015260e0820151838111610190578161248d918401612259565b60e08501526101008083015184811161019057826124ac918501612259565b908501526101208083015184811161019057826124ca918501612259565b908501526101408083015184811161019057826124e8918501612259565b9085015261016092838301519081116101905761250592016122ef565b9082015290565b9080601f8301121561019057602090823561252681610573565b93612534604051958661040c565b81855260208086019260051b82010192831161019057602001905b82821061255d575050505090565b838091833561256b81610e32565b81520191019061254f565b35906101a082612119565b81601f820112156101905780359160209161259b84610573565b936040926125ac604051968761040c565b818652848087019260051b8401019381851161019057858401925b8584106125d8575050505050505090565b67ffffffffffffffff843581811161019057860191606080601f19858803011261019057845190612608826103c0565b8a8501356126158161017f565b82528585013561262481612119565b8b83015284013592831161019057612643868b8096958196010161250c565b858201528152019301926125c7565b91908260609103126101905760405161266a816103c0565b6040808294803561267a81612200565b8452602081013561268a8161220a565b60208501520135910152565b9080601f830112156101905781359160206126b084610573565b936040936126c1604051968761040c565b818652828087019260071b85010193818511610190578301915b8483106126eb5750505050505090565b60808383031261019057836080918751612704816103a4565b853561270f81610e32565b815261271d85848801612652565b838201528152019201916126db565b81601f8201121561019057803590602061274583610573565b93604090612756604051968761040c565b848652828601918360e080970286010194828611610190578401925b858410612783575050505050505090565b868484031261019057848791835161279a816103c0565b86356127a581610e32565b81526127b386848901612652565b838201526127c48660808901612652565b85820152815201930192612772565b60208183031261019057803567ffffffffffffffff918282116101905701610180818403126101905761280461042e565b928135838111610190578161281a91840161250c565b84526020820135838111610190578161283491840161250c565b60208501526040820135838111610190578161285191840161250c565b60408501526060820135838111610190578161286e91840161250c565b606085015261287f60808301612576565b608085015261289060a08301612576565b60a085015260c082013583811161019057816128ad918401612581565b60c085015260e082013583811161019057816128ca918401612696565b60e08501526101008083013584811161019057826128e9918501612696565b90850152610120808301358481116101905782612907918501612696565b90850152610140808301358481116101905782612925918501612696565b90850152610160928383013590811161019057612505920161272c565b634e487b7160e01b600052601160045260246000fd5b60001981146129675760010190565b612942565b916000928392602083519301915af13d60405191816000843e1561298e575090565b90fd5b6129a99060206040519282848094519384920161078e565b810103902090565b9060028210156129be5752565b611f2f565b602090939291936129d88160408101966129b1565b0152565b94939290919460028210156129be5760018203612a87576000808751602089018488f4955b8615612a51577f81d12fffced46c214dfae8ab8fa0b9f7b69f70c9d500e33f612f2105deb261ee91612a4c612a3d6001600160a01b0393612991565b966040519384931695836129c3565b0390a4565b7f3ddd038f78c876172d5dbfd730b14c9f8692dfa197ef104eaac6df3f85a0874a91612a4c612a3d6001600160a01b0393612991565b600080875160208901868589f195612a01565b906001820180921161296757565b91612ac29183549060031b91821b91600019901b19161790565b9055565b81519167ffffffffffffffff831161039f5768010000000000000000831161039f578154838355808410612b2b575b5060208091019160005260206000209060005b848110612b16575050505050565b835160581c8382015592810192600101612b08565b60008360005284602060002092830192015b828110612b4b575050612af5565b818155600101612b3d565b6040906001600160a01b036104a9949316815281602082015201906107b1565b6040906104a99392815281602082015201906118c5565b939091926001600160a01b03851690612ba8610a4383614aed565b61338c57612bb8610a4387613dd4565b61335257604093845195630c77631360e41b875260009060049782818a81895afa908115610c68578391613338575b50612bf5610a438583614086565b61331b578451602090818301908151510361330c57908b92918751865b8181106131ed57505050612c82876002612c7c6001968a88612c54836001600160a01b0316600052600080516020614f97833981519152602052604060002090565b01556001600160a01b0316600052600080516020614f97833981519152602052604060002090565b01612ac6565b60a08201516131ac575b818a018051519084878f5b84821061318c57935050505060608301848151519288905b848210613141575050505050612cc86080830151151590565b1561302a57612d07612cfa8d6001600160a01b0316600052600080516020614f97833981519152602052604060002090565b805460ff19166001179055565b8b905b60e083018051519085885b838110612fe3575050505061010083018051519085885b838110612f9c575050505061012083018051519085885b838110612f73575050505061014083018051519085885b838110612f2d57505050506101608301848c8251519489915b868310612ee1575050505050505080515190845b828110612e755750505050843b15612e715790612dcf918751809381927f6d61fe700000000000000000000000000000000000000000000000000000000083528b83016107d6565b038183885af19081612e58575b50612e1e5786866108e187612def611eff565b90519384937fe838e7610000000000000000000000000000000000000000000000000000000085528401612b56565b919450919450612e537f32d6790d50f8334621a74f0f62e534ef3f4f98133225305074e99e7ce4d8917f935192839283612b76565b0390a2565b80612e65612e6b926103dc565b80610a55565b38612ddc565b5080fd5b80612ecf612e96612e8887948651611b8b565b516001600160e01b03191690565b6001600160e01b0319166000527f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e47602052604060002090565b612ed98154612a9a565b905501612d87565b612f2391612f1d612ef3858851611b8b565b5191612f0783516001600160e01b03191690565b93612f15828b860151614443565b93015161450a565b916147b5565b0185908f8e612d73565b9091929394612f6790612f61612f44848751611b8b565b519188612f5984516001600160e01b03191690565b930151614443565b90614774565b019190858f9493612d5a565b9091929394612f9090612f8a612f44848751611b8b565b9061472d565b019190858f9493612d43565b9091929394612fd790612fd18d612fb4858851611b8b565b519289612fc985516001600160e01b03191690565b9401516143ad565b90614669565b019190858f9493612d2c565b909192939461301e906130188d612ffb858851611b8b565b51928961301085516001600160e01b03191690565b940151614298565b9061457b565b019190858f9493612d15565b60c082018051519084878b8e5b85831061304b575050505050508b90612d0a565b6130b961309661305c858851611b8b565b51936001600160a01b03166000527f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e46602052604060002090565b83516001600160a01b03165b6001600160a01b0316600052602052604060002090565b805460ff191660011781559180880151156130e8575050805461ff0019166101001790555b0185908b8e613037565b01805151918401908b5b83811061310257505050506130de565b613135612cfa61311b612e8884869798999a9651611b8b565b86906001600160e01b031916600052602052604060002090565b019089949392916130f2565b612cfa6113b461318392613159612e88868951611b8b565b6bffffffff00000000000000009060a01c16906bffffffffffffffffffffffff199060601b161790565b0185908f612caf565b6131a39061319e612e88848751611b8b565b6141c0565b0185908f612c97565b6131e86131d98d6001600160a01b0316600052600080516020614f97833981519152602052604060002090565b805461ff001916610100179055565b612c8c565b909192939450613220613211613203838c611b8b565b516001600160581b03191690565b9060ff8260601c9260581c1690565b509060019182613250826001600160a01b0316600052600080516020614f97833981519152602052604060002090565b0154156132c957613271610a4361326b612e88858951611b8b565b83613e77565b6132ba576132a16003916001600160a01b0316600052600080516020614f97833981519152602052604060002090565b016132ac8154612a9a565b905501908d94939291612c12565b8e8e51631794e5f160e01b8152fd5b8e6108e18f519283927f9ca2818b00000000000000000000000000000000000000000000000000000000845283019190916001600160a01b036020820193169052565b8a8a51631794e5f160e01b8152fd5b8751634137b3b960e11b81526001818b0190815281906020010390fd5b61334c91503d8085833e6116c0818361040c565b38612be7565b6040517fb7038f390000000000000000000000000000000000000000000000000000000081526001600160a01b0387166004820152602490fd5b6040517f9d615d050000000000000000000000000000000000000000000000000000000081526001600160a01b0387166004820152602490fd5b600080916040516001600160a01b0360208201927f2c2ecbc200000000000000000000000000000000000000000000000000000000845216602482015260248152613410816103c0565b51906a636f6e736f6c652e6c6f675afa50565b6001600160a01b03811680159081156135c1575b506135855761346b61345f611251836001600160a01b03166000526000602052604060002090565b6001600160a01b031690565b61354957600160009081526020527fecdf3a3effea5783a3c4c2140e677577666428d44ed9d474a0b3a4c9943f844090613544906135106134cb7fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d611251565b6134e8836001600160a01b03166000526000602052604060002090565b906001600160a01b031673ffffffffffffffffffffffffffffffffffffffff19825416179055565b60016000908152602052610d91817fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d6134e8565b0390a1565b6040517fb29d45950000000000000000000000000000000000000000000000000000000081526001600160a01b03919091166004820152602490fd5b6040517fcadb248f0000000000000000000000000000000000000000000000000000000081526001600160a01b03919091166004820152602490fd5b600191501438613437565b9392936135dc5a868585856129dc565b94851561366f576136446136397f8c014e41cffd68ba64f3e7830b8b2e4ee860509d8deab25ebbcbba2f0405e2da956001600160a01b0395604051968796338852166020870152604086015260a0606086015260a08501906107b1565b9160808401906129b1565b0390a1337f6895c13664aa4f67288b25d7a21d7aaa34916e355fb9b6fae0a139a9085becb8600080a2565b50505050337facd2c8702804128fdb0db2bb49f6d127dd0181c13fd45dbfe16de0930e2bd375600080a2565b90604051918281549182825260209260208301916000526020600020936000905b8282106136d2575050506101a09250038361040c565b855460581b6001600160581b031916845260019586019588955093810193909101906136bc565b60001981019190821161296757565b6000908181556001826001830155600282018054908481558161372f575b50505060030155565b845260208420908101905b8181101561372657848155820161373a565b91906001600160a01b03831692613765610a4385614d42565b613d16576001916137a5610a438461379d856001600160a01b0316600052600080516020614f97833981519152602052604060002090565b015483614086565b613cfd576003806137d6846001600160a01b0316600052600080516020614f97833981519152602052604060002090565b0154613cc357613811600261380b856001600160a01b0316600052600080516020614f97833981519152602052604060002090565b0161369b565b908151908560005b838110613c7357505050506101608201805151908560005b838110613c3557505050506101408201805151908560005b838110613c0057505050506101208201805151908560005b838110613bcb57505050506101008201805151908560005b838110613b95575050505060e0820190815151918560005b848110613b5f5750505050506138aa6080820151151590565b15613a80576138e66138dc836001600160a01b0316600052600080516020614f97833981519152602052604060002090565b805460ff19169055565b60608101805151908460005b838110613a35575050505060408101805151908460005b838110613a175750505050805151908360005b8381106139f25750505050613954613959916001600160a01b0316600052600080516020614f97833981519152602052604060002090565b613708565b90823b1561019057600061399a91604051809381927f8a91b0e3000000000000000000000000000000000000000000000000000000008352600483016107d6565b038183875af190816139df575b506139da575060005b1515907feb7551bad8fd10038dee62a958c2b6f45624499dc800ff8936bb0a4904bdd2fe600080a3565b6139b0565b80612e656139ec926103dc565b386139a7565b613a03612e96612e88838651611b8b565b613a0d81546136f9565b905501849061391c565b613a2d613a28612e88838651611b8b565b614a38565b018590613909565b613a786138dc6113b4613a4c612e88858851611b8b565b60608a901b6bffffffffffffffffffffffff191660a09190911c6bffffffff0000000000000000161790565b0185906138f2565b60c08101805151908460005b838110613a9c57505050506138e6565b613aa7818451611b8b565b51613af7613ae78b6001600160a01b03166000527f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e46602052604060002090565b82516001600160a01b03166130a2565b805460ff1916815590602081015115613b1d5750805461ff00191690555b018590613a8c565b6040018051519184019060005b838110613b3a5750505050613b15565b613b536138dc61311b612e8884869798999a9651611b8b565b01908994939291613b2a565b613b8d613b6d828551611b8b565b51613b87868a602061301085516001600160e01b03191690565b906149fb565b018690613891565b613bc3613ba3828551611b8b565b51613bbd878a6020612fc985516001600160e01b03191690565b9061499f565b018690613879565b613bf8613bd9828551611b8b565b51613bf2896020612f5984516001600160e01b03191690565b9061495e565b018690613861565b613c2d613c0e828551611b8b565b51613c27896020612f5984516001600160e01b03191690565b90614917565b018690613849565b613c6b613c43828551611b8b565b5180516001600160e01b03191690613c658a6040612f15826020860151614443565b9161487b565b018690613831565b82613cae613c87613211613203858a611b8b565b506001600160a01b0316600052600080516020614f97833981519152602052604060002090565b01613cb981546136f9565b9055018690613819565b6040517fad3b36340000000000000000000000000000000000000000000000000000000081526001600160a01b0384166004820152602490fd5b604051634137b3b960e11b815260026004820152602490fd5b6040517f038e01780000000000000000000000000000000000000000000000000000000081526001600160a01b03919091166004820152602490fd5b8054613d5d81610573565b91613d6b604051938461040c565b818352613d7782610573565b602090601f1901368583013760009160005b848110613d9857505050505090565b80613da560019284614ad5565b90549060031b1c8086526002840185526affffffffffffffffffffff1916613dcd8289611b8b565b5201613d89565b613ddd81614c11565b9081613e65575b81613ded575090565b60209150600090604051838101906301ffc9a760e01b82527ff23b1ed700000000000000000000000000000000000000000000000000000000602482015260248152613e38816103c0565b5191617530fa6000513d82613e59575b5081613e52575090565b9050151590565b60201115915038613e48565b9050613e7081614c3a565b1590613de4565b613e8081614c11565b9182613ec6575b82613e9157505090565b60209250906000916040516001600160e01b0319858201926301ffc9a760e01b845216602482015260248152613e38816103c0565b9150613ed181614c3a565b1591613e87565b90815180825260208080930193019160005b828110613ef8575050505090565b83516001600160e01b03191685529381019392810192600101613eea565b908082519081815260208091019281808460051b8301019501936000915b848310613f445750505050505090565b9091929394958480613f8a600193601f198682030187528a51906060906001600160a01b0383511681528483015115158582015281604080940151938201520190613ed8565b9801930193019194939290613f34565b600511156129be57565b805160058110156129be576040918291845260ff60208201511660208501520151910152565b90815180825260208080930193019160005b828110613fea575050505090565b909192938260806001926140138389516001600160e01b03198151168452015184830190613fa4565b01950193929101613fdc565b90815180825260208080930193019160005b82811061403f575050505090565b909192938260e060019261407a604089516001600160e01b0319815116845261406e8682015187860190613fa4565b01516080830190613fa4565b01950193929101614031565b6040516141b9816141ab60208201946020865280516140b3610180918260408701526101c0860190613ed8565b906141986141016140ed6140d9602087015195603f1996878b83030160608c0152613ed8565b6040870151868a83030160808b0152613ed8565b6060860151858983030160a08a0152613ed8565b6080850151151560c088015260a0850151151560e088015261413460c08601519161010092868a830301848b0152613f16565b9261418561416e61415760e089015196610120978c898b82850301910152613fca565b938801519361014094888c830301868d0152613fca565b948701519461016095878b830301878c0152613fca565b9186015190858984030190890152613fca565b92015190848303016101a085015261401f565b03601f19810183528261040c565b5190201490565b91906001600160a01b038082161561426e576141fd846001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b90815416614233576101a0929350906001600160a01b031673ffffffffffffffffffffffffffffffffffffffff19825416179055565b6024846001600160e01b0319604051917fec9cbcb3000000000000000000000000000000000000000000000000000000008352166004820152fd5b60046040517f686e2ddc000000000000000000000000000000000000000000000000000000008152fd5b9091600182516142a781613f9a565b6142b081613f9a565b036142ed5750602001516104a9919060ff165b6bff00000000000000000000009060581b16906bffffffffffffffffffffffff199060601b161790565b9150600281516142fc81613f9a565b61430581613f9a565b0361433f57604001805182511115614326576104a991613203915190611b8b565b604051634137b3b960e11b815260036004820152602490fd5b90506003815161434e81613f9a565b61435781613f9a565b0361437457604051634137b3b960e11b8152600480820152602490fd5b6004905161438181613f9a565b61438a81613f9a565b1461439457600090565b604051634137b3b960e11b815260056004820152602490fd5b9091600182516143bc81613f9a565b6143c581613f9a565b036143dc5750602001516104a9919060ff166142c3565b9150600281516143eb81613f9a565b6143f481613f9a565b0361441557604001805182511115614326576104a991613203915190611b8b565b90506003815161442481613f9a565b61442d81613f9a565b0361437457506b01000000000000000000000090565b906001825161445181613f9a565b61445a81613f9a565b03614470576142c360206104a993015160ff1690565b506002815161447e81613f9a565b61448781613f9a565b036144a75760400180516060511115614326576132036104a99151611b78565b600381516144b481613f9a565b6144bd81613f9a565b036144da57604051634137b3b960e11b8152600480820152602490fd5b600490516144e781613f9a565b6144f081613f9a565b146144fa57600090565b6b02000000000000000000000090565b906001825161451881613f9a565b61452181613f9a565b03614537576142c360206104a993015160ff1690565b506002815161454581613f9a565b61454e81613f9a565b0361456e5760400180516060511115614326576132036104a99151611b78565b6003815161434e81613f9a565b6001600160581b0319908282161561463f5760016145ba826001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b0191825460581b166145ef5750906101a0919060581c74ffffffffffffffffffffffffffffffffffffffffff19825416179055565b6040517fb2a80ddc0000000000000000000000000000000000000000000000000000000081526001600160e01b03199190911660048201526001600160581b031992909216602483015250604490fd5b60046040517f6c911ea0000000000000000000000000000000000000000000000000000000008152fd5b6001600160581b0319908282161561463f5760026146a8826001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b0191825460581b166146dd5750906101a0919060581c74ffffffffffffffffffffffffffffffffffffffffff19825416179055565b6040517fe70980510000000000000000000000000000000000000000000000000000000081526001600160e01b03199190911660048201526001600160581b031992909216602483015250604490fd5b906001600160581b031916801561463f57600361476e6101a0936001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b01614c6b565b906001600160581b031916801561463f57600661476e6101a0936001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b6147e3909291926001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b906001600160581b031990838216801561483d576148049060098501614c6b565b16908161481057505050565b6101a092600c6148389201906affffffffffffffffffffff1916600052602052604060002090565b614c6b565b5091925016801561463f57600d6101a09201614c6b565b919061486260029184614ad5565b90549060031b1c92836000520160205260406000205490565b6148a9909291926001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b906001600160581b0319908382168015614907576148ca9060098501614ee0565b501690816148d757505050565b61490492600c6148ff9201906affffffffffffffffffffff1916600052602052604060002090565b614ee0565b50565b5061490493501690600d01614ee0565b906001600160581b031916801561463f576006614958614904936001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b01614ee0565b906001600160581b031916801561463f576003614958614904936001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b906001600160581b0319161561463f576149dc6002916001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b0174ffffffffffffffffffffffffffffffffffffffffff198154169055565b906001600160581b0319161561463f576149dc6001916001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b614a63906001600160e01b031916600052600080516020614fb7833981519152602052604060002090565b73ffffffffffffffffffffffffffffffffffffffff198154169055565b7f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e4180548210156119d4576000527fcb3ee1351fe181fba9983de0b72f04b53b02f83e27cefacf502e357c21a9fe5d0190600090565b80548210156119d45760005260206000200190600090565b806000527f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e428060205260406000205415600014614b9e577f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e4180546801000000000000000081101561039f57600181018083558110156119d45783907fcb3ee1351fe181fba9983de0b72f04b53b02f83e27cefacf502e357c21a9fe5d01555491600052602052604060002055600190565b5050600090565b6000828152600182016020526040902054614b9e578054906801000000000000000082101561039f5782614bfa614be3846001809601855584614ad5565b819391549060031b91821b91600019901b19161790565b905580549260005201602052604060002055600190565b6000602091604051838101906301ffc9a760e01b808352602482015260248152613e38816103c0565b6000602091604051838101906301ffc9a760e01b82526001600160e01b0319602482015260248152613e38816103c0565b614c758282614f36565b929015614c915760018301809311612967576149049291614f7c565b6149049250600091614f7c565b7f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e418054908115614d0257600019820191808310156119d4577fcb3ee1351fe181fba9983de0b72f04b53b02f83e27cefacf502e357c21a9fe5c600091838352015555565b634e487b7160e01b600052603160045260246000fd5b8054908115614d025760001991820191614d328383614ad5565b909182549160031b1b1916905555565b60008181527f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e4260205260409020548015614b9e576000199181830191808311612967577f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e4154938401938411612967578383614dfa9460009603614e00575b505050614dcb614c9e565b6000527f9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e42602052604060002090565b55600190565b614dcb614e2891614e20614e16614e2e95614a80565b90549060031b1c90565b928391614a80565b90612aa8565b55388080614dc0565b6001810191806000528260205260406000205492831515600014614ed7576000199284840190858211612967578054948501948511612967576000958583614e8b94614dfa9803614e9a575b505050614d18565b90600052602052604060002090565b614ebe614e2891614eae614ece9487614ad5565b90549060031b1c92839187614ad5565b8590600052602052604060002090565b55388080614e83565b50505050600090565b90614eeb8183614f36565b9015614f2e5780614f185750614f1291816000526002810160205260006040812055614e37565b50600190565b60001981019190821161296757614f1292614f7c565b505050600090565b91908060005260028301602052604060002054928315600014614f7457614f6e92935060019160005201602052604060002054151590565b90600090565b505060019190565b6104a9928260005260028201602052604060002055614ba556fe9f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e439f09680beaa4e5c9f38841db2460c401499164f368baef687948c315d9073e44a26469706673582212207a5f0821ded356e9b36a05f4798073b10e55efb99b86c7eb45691a35af36f9c664736f6c63430008180033'
