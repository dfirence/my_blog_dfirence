import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import WebsiteMaStatsGrid from '@theme/ma-ui/components/WebsiteMaStatsGrid';


export default function EnterpriseStats() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <WebsiteMaStatsGrid statistic="techniques" version={9} />
      <main>
      </main>
    </Layout>
  );
}
