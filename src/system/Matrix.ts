import { Wallets } from "../Wallets";
import { Api, SupportLevel } from "./Types";

export function getCompatibility(targetApi: Api): {
  name: string,
  logo: string,
  injectAs: string,
  support: SupportLevel
}[] {
  return Wallets.map(wallet => {
    return {
      name: wallet.name,
      logo: wallet.logo,
      injectAs: wallet.injectAs,
      support: wallet.Apis[targetApi]
    };
  });
}