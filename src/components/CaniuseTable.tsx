import React from 'react';
import { SupportedCell, DeprecatedCell, NotSupportedCell, PartialSupportedCell, UnknownCell } from '@site/src/components/TableCells';
import { Api, SupportLevel } from '@site/src/system/Types';
import TableBase from './TableBase';
import { getCompatibility } from '../system/Matrix';

export default function CaniuseTable(props: {
  api: Api
}): JSX.Element {
  return (
    <TableBase>
      {getCompatibility(props.api).map((row, i) => {
        switch (row.support) {
          case SupportLevel.Supported:
            return <SupportedCell key={i}>SUPPORTED</SupportedCell>
          case SupportLevel.Deprecated:
            return <DeprecatedCell key={i}>DEPRECATED</DeprecatedCell>
          case SupportLevel.Experimental:
            return <PartialSupportedCell key={i}>EXPERIMENTAL SUPPORT</PartialSupportedCell>
          case SupportLevel.Unsupported:
            return <NotSupportedCell key={i}>NOT SUPPORTED</NotSupportedCell>
          default:
            return <UnknownCell key={i}>UNKNOWN</UnknownCell>
        }
      })}
    </TableBase>
  );
}