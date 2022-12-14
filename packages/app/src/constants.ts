import { chain } from "wagmi";

import { targetChainId } from "./EthereumProviders";

export const juiceboxTreasuryIds =
  targetChainId === chain.goerli.id ? [124] : [311];

export const juiceboxProjectIds =
  targetChainId === chain.goerli.id ? [] : [311];

export const juiceboxUrl =
  targetChainId === chain.goerli.id
    ? "https://goerli.juicebox.money"
    : "https://juicebox.money";
