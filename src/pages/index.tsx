import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Head from '@docusaurus/Head';
import { Paper, useTheme } from '@mui/material';
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

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const theme = useTheme();

  return (
    <Layout
      title={siteConfig.title}
      description="Up-to-date wallet support tables for cip30 (dApp connector) support">
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
    </Layout>
  );
}
