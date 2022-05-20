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
  GetRewardAddresses,
  GetCollateral,
  SignTx,
  SignData,
  SubmitTx,
  OnAccountChange,
  OnNetworkChange,
  On,
  Off,
  GetLockedUtxos
}

export enum SupportLevel {
  Supported,
  Unsupported,
  Experimental,
  Deprecated
}

export type Wallet = {
  name: string,
  logo: string,
  Apis: { api: Api, supportLevel: SupportLevel }[]
}