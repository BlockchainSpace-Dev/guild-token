/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IRewards } from "../IRewards";

export class IRewards__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRewards {
    return new Contract(address, _abi, signerOrProvider) as IRewards;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
    ],
    name: "addAmmLp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateralAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
    ],
    name: "addMinterCollateralType",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_epochRewardAmount",
        type: "uint256",
      },
    ],
    name: "depositEpochRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateralAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "depositMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "getPendingPoolRewardsByUserByPool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalMinterLpAllocationPoints",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalPoolAllocationPoints",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateralAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "getUnclaimedMinterLpRewardsByUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpAddress",
        type: "address",
      },
    ],
    name: "isValidAmmLp",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateralAddress",
        type: "address",
      },
    ],
    name: "isValidMinterLp",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpAddress",
        type: "address",
      },
    ],
    name: "removeLp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateralAddress",
        type: "address",
      },
    ],
    name: "removeMinterCollateralType",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
    ],
    name: "setAmmLpAllocationPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateralAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
    ],
    name: "setMinterLpAllocationPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpAddress",
        type: "address",
      },
    ],
    name: "updateAmmRewardPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateralAddress",
        type: "address",
      },
    ],
    name: "updateMinterRewardPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateralAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
