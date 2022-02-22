import { Api, SupportLevel } from "../system/Types";

export default {
  name: 'Gero',
  injectAs: 'gerowallet',
  logo: 'https://gerowallet.io/assets/img/logo2.ico',
  Apis: {
    [Api.Enable]: SupportLevel.Supported,
    [Api.IsEnabled]: SupportLevel.Supported,
    [Api.ApiVersion]: SupportLevel.Supported,
    [Api.Name]: SupportLevel.Supported,
    [Api.Icon]: SupportLevel.Supported,
    [Api.GetNetworkId]: SupportLevel.Supported,
    [Api.GetUtxos]: SupportLevel.Supported,
    [Api.GetBalance]: SupportLevel.Supported,
    [Api.GetUsedAddresses]: SupportLevel.Supported,
    [Api.GetUnusedAddresses]: SupportLevel.Supported,
    [Api.GetChangeAddress]: SupportLevel.Supported,
    [Api.GetRewardAddress]: SupportLevel.Supported,
    [Api.GetRewardAddresses]: SupportLevel.Unsupported,
    [Api.SignTx]: SupportLevel.Supported,
    [Api.SignData]: SupportLevel.Supported,
    [Api.SubmitTx]: SupportLevel.Supported,
    [Api.GetCollateral]: SupportLevel.Experimental,
    [Api.On]: SupportLevel.Unsupported,
    [Api.Off]: SupportLevel.Unsupported,
    [Api.OnAccountChange]: SupportLevel.Unsupported,
    [Api.OnNetworkChange]: SupportLevel.Unsupported
  }
}