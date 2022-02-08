import { Api, SupportLevel } from "../system/Types";

export default {
  name: 'Gero',
  injectAs: 'gerowallet',
  logo: '',
  Apis: {
    [Api.GetUsedAddresses]: SupportLevel.Supported,
    [Api.GetUtxos]: SupportLevel.Unsupported
  }
}