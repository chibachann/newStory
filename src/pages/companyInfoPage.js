import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from 'gatsby';

import CompanyInfo from "../components/companyInfo/companyInfo";

const CompanyInfoPage = () => {

    return (
        <Layout>
            <CompanyInfo />
        </Layout>
    );
};

export default CompanyInfoPage;

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
