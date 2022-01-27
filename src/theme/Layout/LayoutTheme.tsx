import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';

export default function LayoutTheme(props): JSX.Element {
  // Docusaurus Theme
  const { isDarkTheme } = useColorMode();

  // Material UI Theme
  const theme = React.useMemo(() => createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',
    },
  }), [isDarkTheme]);

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}