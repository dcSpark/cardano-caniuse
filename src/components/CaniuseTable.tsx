import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { SupportedCell, NotSupportedCell, PartialSupportedCell, UnknownCell } from '@site/src/components/TableCells';
import { Api, SupportLevel } from '@site/src/system/Types';
import { getCompatbility } from '../system/Matrix';

function TablePaper(props): JSX.Element {
  return <Paper elevation={6}>{props.children}</Paper>;
}

export default function CaniuseTable(props: {
  api: Api
}): JSX.Element {
  const walletCompatibility = getCompatbility(props.api);
  return <TableContainer component={TablePaper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {walletCompatibility.map((row, i) => {
            return <TableCell align="center" key={i}>
              <img width="20" height="20" src={row.logo} alt={row.name} style={{
                marginRight: "8px",
                transform: "translateY(4px)"
              }} />
              <span>{row.name}</span>
            </TableCell>
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow
          key='1'
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          {walletCompatibility.map((row, i) => {
            switch (row.support) {
              case SupportLevel.Supported:
                return <SupportedCell key={i}>SUPPORTED</SupportedCell>
              case SupportLevel.Experimental:
                return <PartialSupportedCell key={i}>EXPERIMENTAL SUPPORT</PartialSupportedCell>
              case SupportLevel.Unsupported:
                return <NotSupportedCell key={i}>NOT SUPPORTED</NotSupportedCell>
              default:
                return <UnknownCell key={i}>UNKNOWN</UnknownCell>
            }
          })}
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
}