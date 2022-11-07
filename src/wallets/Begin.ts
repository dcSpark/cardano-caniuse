import { Api, SupportLevel } from "../system/Types";

export default {
  name: 'Begin',
  injectAs: 'begin',
  logo: "data:image/svg+xml,%3Csvg width='27' height='26' viewBox='0 0 27 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.7342 14.908C22.3376 16.3087 20.5093 17.1974 18.545 17.4301C18.5664 15.527 18.027 13.6597 16.9941 12.0611C17.5167 12.1382 18.05 12.0935 18.5524 11.9304C19.0548 11.7673 19.5127 11.4903 19.8903 11.121C21.2557 9.78667 21.2371 7.55941 19.8875 6.20976L17.4933 3.81562L21.3072 0L23.7328 2.42594C26.3191 5.01233 26.9648 8.80436 25.6695 11.9932C25.2261 13.0846 24.568 14.0758 23.7342 14.908Z' fill='%233414FC'/%3E%3Cpath d='M8.82646 22.1847L5.01263 26.0004L2.58704 23.5744C0.000656735 20.988 -0.645046 17.196 0.65029 14.0071C1.24517 12.548 2.21944 11.2744 3.47213 10.3185C4.72483 9.3625 6.21037 8.75894 7.77482 8.5703C7.75338 10.4734 8.29275 12.3407 9.32565 13.9392C8.8031 13.8621 8.26979 13.9068 7.76738 14.0699C7.26498 14.233 6.80708 14.5101 6.42946 14.8794C5.06408 16.2137 5.08266 18.4409 6.43232 19.7906L8.82646 22.1847Z' fill='%233414FC'/%3E%3Cpath d='M15.0677 23.5744L12.6418 26.0004L8.82652 22.1847L11.2521 19.7592C11.8954 19.1158 12.2568 18.2433 12.2568 17.3336C12.2568 16.4238 11.8954 15.5513 11.2521 14.908C9.59688 13.2528 8.66699 11.0078 8.66699 8.66696C8.66699 6.32613 9.59688 4.08117 11.2521 2.42594L13.678 0L17.4933 3.81562L15.0677 6.2412C14.4244 6.88452 14.0631 7.75702 14.0631 8.66679C14.0631 9.57655 14.4244 10.449 15.0677 11.0924C16.7229 12.7476 17.6528 14.9926 17.6528 17.3334C17.6528 19.6742 16.7229 21.9192 15.0677 23.5744Z' fill='%233414FC'/%3E%3C/svg%3E%0A",
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
    [Api.GetRewardAddress]: SupportLevel.Deprecated,
    [Api.GetRewardAddresses]: SupportLevel.Supported,
    [Api.SignTx]: SupportLevel.Supported,
    [Api.SignData]: SupportLevel.Supported,
    [Api.SubmitTx]: SupportLevel.Supported,
    [Api.GetCollateral]: SupportLevel.Experimental,
    [Api.On]: SupportLevel.Experimental,
    [Api.Off]: SupportLevel.Experimental,
  }
}