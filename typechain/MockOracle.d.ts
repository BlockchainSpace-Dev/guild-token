/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MockOracleInterface extends ethers.utils.Interface {
  functions: {
    "latestAnswer()": FunctionFragment;
    "latestRoundData()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "latestAnswer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRoundData",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "latestAnswer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRoundData",
    data: BytesLike
  ): Result;

  events: {};
}

export class MockOracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MockOracleInterface;

  functions: {
    latestAnswer(overrides?: CallOverrides): Promise<[BigNumber]>;

    "latestAnswer()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestRoundData(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId_: BigNumber;
        answer_: BigNumber;
        startedAt_: BigNumber;
        updatedAt_: BigNumber;
        answeredInRound_: BigNumber;
      }
    >;

    "latestRoundData()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId_: BigNumber;
        answer_: BigNumber;
        startedAt_: BigNumber;
        updatedAt_: BigNumber;
        answeredInRound_: BigNumber;
      }
    >;
  };

  latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;

  "latestAnswer()"(overrides?: CallOverrides): Promise<BigNumber>;

  latestRoundData(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId_: BigNumber;
      answer_: BigNumber;
      startedAt_: BigNumber;
      updatedAt_: BigNumber;
      answeredInRound_: BigNumber;
    }
  >;

  "latestRoundData()"(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId_: BigNumber;
      answer_: BigNumber;
      startedAt_: BigNumber;
      updatedAt_: BigNumber;
      answeredInRound_: BigNumber;
    }
  >;

  callStatic: {
    latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;

    "latestAnswer()"(overrides?: CallOverrides): Promise<BigNumber>;

    latestRoundData(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId_: BigNumber;
        answer_: BigNumber;
        startedAt_: BigNumber;
        updatedAt_: BigNumber;
        answeredInRound_: BigNumber;
      }
    >;

    "latestRoundData()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId_: BigNumber;
        answer_: BigNumber;
        startedAt_: BigNumber;
        updatedAt_: BigNumber;
        answeredInRound_: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;

    "latestAnswer()"(overrides?: CallOverrides): Promise<BigNumber>;

    latestRoundData(overrides?: CallOverrides): Promise<BigNumber>;

    "latestRoundData()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    latestAnswer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "latestAnswer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestRoundData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "latestRoundData()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
