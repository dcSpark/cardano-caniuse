// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CARDANO | CANIUSE',
  tagline: 'Cardano Wallet API Compatiblity Matrix ⚡️',
  url: 'https://www.cardano-caniuse.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dcSpark', // Usually your GitHub org/user name.
  projectName: 'cardano-caniuse', // Usually your repo name.
  plugins: [],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dcSpark/cardano-caniuse',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/dcSpark/cardano-caniuse',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CARDANO | CANIUSE',
        items: [
          {
            href: 'https://github.com/cardano-foundation/CIPs/tree/master/CIP-0030',
            position: 'right',
            className: 'header-github-link',
            label: 'Cardano dApp-Wallet Web Bridge (CIP30)'
          },
          {
            href: 'https://github.com/dcSpark/cardano-caniuse',
            position: 'right',
            className: 'header-github-link',
            label: 'Edit on GitHub'
          }
        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} CARDANO | CANIUSE. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      }
    }),
};

module.exports = config;
