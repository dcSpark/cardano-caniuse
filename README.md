![CARDANOCANIUSE](https://github.com/dcSpark/cardano-caniuse/blob/main/static/img/caniuse_new.png?raw=true)

# Adding a new wallet

Go to the directory `src/wallets/` you should see something like this: 

```
src/wallets
├── Cv.ts
├── Flint.ts
├── Gero.ts
└── Nami.ts
```

Add a new wallet definition like so:

```ts
// CardanoWallet.ts

import { Api, SupportLevel } from "../system/Types";

export default {
  name: 'CardanoWallet',
  logo: 'data:image/svg+xml',
  Apis: {
    [Api.GetUsedAddresses]: SupportLevel.Supported,
    [Api.GetUtxos]: SupportLevel.Unsupported,
    [Api.IsEnabled]: SupportLevel.Experimental
  }
}
```

# Adding a new API

## Adding API Type
Open `src/system/Types.ts` you should see something like this: 

```ts
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
  // Add your new api here
  NewAPI
}
```

## Adding API definition

Open `docs/partials/` you should see something like this: 

```
docs/partials
├── _apiVersion.mdx
├── _enable.mdx
├── _getBalance.mdx
├── _getChangeAddress.mdx
├── _getNetworkId.mdx
├── _getRewardAddress.mdx
├── _getUnusedAddresses.mdx
├── _getUsedAddresses.mdx
├── _getUtxos.mdx
├── _icon.mdx
├── _isEnabled.mdx
├── _name.mdx
├── _signData.mdx
├── _signTx.mdx
└── _submitTx.mdx
```

Add a new API definition like so:

```md
import CaniuseTable from '@site/src/components/CaniuseTable';
import { Api } from '@site/src/system/Types';

## `cardano.{walletName}.apiVersion: String`

The version number of the API that the wallet supports.

<CaniuseTable api={Api.NewAPI}/>
```

Make sure to pass in your API type `<CaniuseTable api={Api.NewAPI}/>` in the `CaniuseTable` element.

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
