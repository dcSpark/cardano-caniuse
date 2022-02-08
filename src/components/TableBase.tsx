import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery } from '@mui/material';
import { Wallets } from '../Wallets';

function TablePaper(props): JSX.Element {
  const isMobile = useMediaQuery('(max-width: 680px)', { noSsr: true });
  const style = isMobile ? { float: 'left' } : {};
  return <Paper elevation={6} sx={style}>{props.children}</Paper>;
}

export default function CaniuseTable(props: {
  children: React.ReactNode
}): JSX.Element {
  return <div style={{
    width: "100%",
    overflowX: "auto"
  }}>
    <TableContainer component={TablePaper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Wallets.map((row, i) => {
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
            {props.children}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </div>
}