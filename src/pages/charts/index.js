import React from "react";
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LineChart from '../../theme/LineChart';

export default function LineChartPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <br />
      <div>
        <LineChart />
      </div>
    </Layout>
  )
}