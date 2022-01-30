import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { useColorMode } from '@docusaurus/theme-common';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';

export default function LayoutTheme(props): JSX.Element {
  // Docusaurus Theme
  let { isDarkTheme } = useColorMode();
  // Hack to work in production???
  
  if (useIsBrowser()) {
    isDarkTheme = localStorage.getItem('theme') !== null ?
      localStorage.getItem('theme') === 'dark' : isDarkTheme;
  }

  // Material UI Theme
  const theme = React.useMemo(() => createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',
    },
  }), [isDarkTheme]);

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}