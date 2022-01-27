import { Api, SupportLevel } from "../system/Types";

export default {
  name: 'Gero',
  logo: 'bitcoin',
  Apis: {
    [Api.GetUsedAddresses]: SupportLevel.Supported ,
    [Api.GetUtxos]: SupportLevel.Unsupported
  }
}