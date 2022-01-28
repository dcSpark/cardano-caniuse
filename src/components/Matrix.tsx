import React from 'react';
import { Paper } from '@mui/material';
/* list of APIs */
import GetUsedAddresses from '@site/docs/partials/_getUsedAddresses.mdx';
import GetUsedUtxos from '@site/docs/partials/_getUtxos.mdx';
import Enable from '@site/docs/partials/_enable.mdx';
import IsEnabled from '@site/docs/partials/_isEnabled.mdx';
import ApiVersion from '@site/docs/partials/_apiVersion.mdx';
import Name from '@site/docs/partials/_name.mdx';
import Icon from '@site/docs/partials/_icon.mdx';
import GetNetworkId from '@site/docs/partials/_getNetworkId.mdx';
import GetBalance from '@site/docs/partials/_getBalance.mdx';
import GetUnusedAddresses from '@site/docs/partials/_getUnusedAddresses.mdx';
import GetChangeAddress from '@site/docs/partials/_getChangeAddress.mdx';
import GetRewardAddress from '@site/docs/partials/_getRewardAddress.mdx';
import GetCollateral from '@site/docs/partials/_getCollateral.mdx';
import SignTx from '@site/docs/partials/_signTx.mdx';
import SignData from '@site/docs/partials/_signData.mdx';
import SubmitTx from '@site/docs/partials/_submitTx.mdx';
import onAccountChange from '@site/docs/partials/_onAccountChange.mdx';
import onNetworkChange from '@site/docs/partials/_onNetworkChange.mdx';

const docs = [
  Enable,
  IsEnabled,
  ApiVersion,
  Name,
  Icon,
  GetNetworkId,
  GetUsedUtxos,
  GetBalance,
  GetUsedAddresses,
  GetUnusedAddresses,
  GetChangeAddress,
  GetRewardAddress,
  GetCollateral,
  SignTx,
  SignData,
  SubmitTx
]

export default function Matrix(): JSX.Element {
  return <>
    {docs.map((Doc, i) => {
       return <Paper elevation={3} key={i} sx={{
        margin: "16px 0px",
        padding: "16px",
      }}>
        <Doc />
      </Paper>
    })}
  </>
}