import React, { useMemo } from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import styles from './index.module.css';
import useIsBrowser from '@docusaurus/useIsBrowser';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import { createTheme, Paper, ThemeProvider, useTheme } from '@mui/material';
import Matrix from '../components/Matrix';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    const theme = useTheme();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)} style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.getContrastText(theme.palette.primary.main),
        }}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

export default function ThemeContainer(props): JSX.Element {
    // Docusaurus Theme
    let { colorMode } = useColorMode();

    // Material UI Theme
    const reactTheme = useMemo(() => {
        return createTheme({
            palette: {
                mode: colorMode,
            },
        });
    }, [colorMode]);

    console.log(reactTheme);

    return (
        <ThemeProvider theme={reactTheme}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </Head>
            <HomepageHeader />
            <main>
                <Paper className={styles.main}>
                    <Matrix />
                </Paper>
            </main>
        </ThemeProvider>
    )
}