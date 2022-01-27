import { Wallets } from "../Wallets";
import { Api } from "./Types";

export function getCompatbility(targetApi: Api) {
  return Wallets.map(wallet => {
    return {
      name: wallet.name,
      logo: wallet.logo,
      support: wallet.Apis[targetApi]
    };
  });
}