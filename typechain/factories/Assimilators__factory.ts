/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Assimilators } from "../Assimilators";

export class Assimilators__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Assimilators> {
    return super.deploy(overrides || {}) as Promise<Assimilators>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Assimilators {
    return super.attach(address) as Assimilators;
  }
  connect(signer: Signer): Assimilators__factory {
    return super.connect(signer) as Assimilators__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Assimilators {
    return new Contract(address, _abi, signerOrProvider) as Assimilators;
  }
}

const _abi = [
  {
    inputs: [],
    name: "iAsmltr",
    outputs: [
      {
        internalType: "contract IAssimilator",
        name: "",
        type: "IAssimilator",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a5610024600b82828239805160001a607314601757fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806375bb1536146038575b600080fd5b603e606a565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008156fea2646970667358221220442fe293bae3ec43c84a91324c867c21f0d30cba63d9c0ee8cad73f6279d1e6664736f6c634300060c0033";