import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from 'gatsby';

import Top02 from "../components/Top02/Top02";
import About02 from "../components/About02/About02";
import Works01 from "../components/Works01/Works01";
import Features01 from "../components/Features01/Features01";
import FeatureNumber01 from "../components/FeatureNumber01/FeatureNumber01";
import FeatureNumber02 from "../components/FeatureNumber02/FeatureNumber02";
import FeatureNumber03 from "../components/FeatureNumber03/FeatureNumber03";

const Index = () => {
    return (
        <Layout>
            <Top02 />
            <About02 />
            <Works01 />
            <Features01 />
            <FeatureNumber01 />
            <FeatureNumber02 />
            <FeatureNumber03 />
        </Layout>
    );
};

export default Index;

export const Head = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `)
    return (
      <>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        
        {/* OGタグ */}
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:description" content={data.site.siteMetadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
        <meta property="og:image" content={`${data.site.siteMetadata.siteUrl}/OG.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitterカード */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.site.siteMetadata.title} />
        <meta name="twitter:description" content={data.site.siteMetadata.description} />
        <meta name="twitter:image" content={`${data.site.siteMetadata.siteUrl}/OG.jpg`} />
      </>
    );
  }
