/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Mitre-Assistant',
  tagline: 'Faster, Flexible & Cooler ATT&CK Client',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ma-favicon.ico',
  organizationName: '@dfirence', // Usually your GitHub org/user name.
  projectName: 'ma-docs', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,  // Hides SideBar
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,  // DarkMode Toggle Switch
    },
    navbar: {
      title: 'Mitre Assistant',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ma_logo_tr_blue.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'project/Brief_Overview',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/dfirence/mitre-assistant',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

/**
 * 
 *     footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Intro',
              to: '/docs/project/Brief_Overview',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mitre Assistant by @dfirence`,
    },
 */