export enum Api {
  Enable,
  IsEnabled,
  ApiVersion,
  Name,
  Icon,
  GetNetworkId,
  GetUtxos,
  GetBalance,
  GetUsedAddresses,
  GetUnusedAddresses,
  GetChangeAddress,
  GetRewardAddress,
  SignTx,
  SignData,
  SubmitTx
}

export enum SupportLevel {
  Supported,
  Unsupported,
  Experimental
}

export type Wallet = {
  name: string,
  logo: string,
  Apis: { api: Api, supportLevel: SupportLevel }[]
}