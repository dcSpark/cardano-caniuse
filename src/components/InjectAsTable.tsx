import React from 'react';
import { UnknownCell } from '@site/src/components/TableCells';
import { Api } from '@site/src/system/Types';
import TableBase from './TableBase';
import { Wallets } from '../Wallets';

export default function InjectAsTable(): JSX.Element {
  return (
    <TableBase>
      {Wallets.map((row, i) => {
        return <UnknownCell key={i}>{row.injectAs}</UnknownCell>
      })}
    </TableBase>
  );
}