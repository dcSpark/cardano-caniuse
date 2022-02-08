import { Api, SupportLevel } from "../system/Types";

export default {
  name: 'Nami',
  injectAs: 'nami',
  logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 486.17 499.86'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23349ea3;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath id='path16' class='cls-1' d='M73.87,52.15,62.11,40.07A23.93,23.93,0,0,1,41.9,61.87L54,73.09,486.17,476ZM102.4,168.93V409.47a23.76,23.76,0,0,1,32.13-2.14V245.94L395,499.86h44.87Zm303.36-55.58a23.84,23.84,0,0,1-16.64-6.68v162.8L133.46,15.57H84L421.28,345.79V107.6A23.72,23.72,0,0,1,405.76,113.35Z'/%3E%3Cpath id='path18' class='cls-1' d='M38.27,0A38.25,38.25,0,1,0,76.49,38.27v0A38.28,38.28,0,0,0,38.27,0ZM41.9,61.8a22,22,0,0,1-3.63.28A23.94,23.94,0,1,1,62.18,38.13V40A23.94,23.94,0,0,1,41.9,61.8Z'/%3E%3Cpath id='path20' class='cls-1' d='M405.76,51.2a38.24,38.24,0,0,0,0,76.46,37.57,37.57,0,0,0,15.52-3.3A38.22,38.22,0,0,0,405.76,51.2Zm15.52,56.4a23.91,23.91,0,1,1,8.39-18.18A23.91,23.91,0,0,1,421.28,107.6Z'/%3E%3Cpath id='path22' class='cls-1' d='M134.58,390.81A38.25,38.25,0,1,0,157.92,426a38.24,38.24,0,0,0-23.34-35.22Zm-15,59.13A23.91,23.91,0,1,1,143.54,426a23.9,23.9,0,0,1-23.94,23.91Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
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
    [Api.SignTx]: SupportLevel.Supported,
    [Api.SignData]: SupportLevel.Supported,
    [Api.SubmitTx]: SupportLevel.Supported,
    [Api.GetCollateral]: SupportLevel.Experimental,
    [Api.On]: SupportLevel.Experimental,
    [Api.Off]: SupportLevel.Experimental
  }
}