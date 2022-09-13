/* eslint-disable react/jsx-props-no-spreading */
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";

import defaultSEOConfig from "../../next-seo.config";
import { Chakra } from "Chakra";
import Layout from "lib/layout";
import "lib/styles/globals.css";
import { resetDaily, resetWeekly, updateLastVisit } from "lib/reset-util";

const MyApp = ({ Component }: AppProps) => {
  if (typeof window !== "undefined") {
    resetDaily();
    resetWeekly();
    updateLastVisit();
  }

  return (
    <Chakra>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <Layout>
        <Component {...Component.defaultProps} />
      </Layout>
    </Chakra>
  );
};

export { getServerSideProps } from "Chakra";
export default MyApp;
