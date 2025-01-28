// gatsby-config.js
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  });

module.exports = {
    flags: {
        DEV_SSR: true
      },
    siteMetadata: {
        title: 'ウェブサイト制作・ホームページ作成 | Story Web Solutions',
        description: "東京都渋谷区のWeb制作会社。チャットボット開発、ECサイト構築、決済システム導入、顧客管理システム開発など、最適なWebソリューションを提供します。",
        siteUrl: "https://www.storyweb-solutions.com",
        author: "Story Web Solutions",
        lang: "ja",
        image: "/images/ogp-image.jpg",
        keywords: "ウェブサイト制作,ホームページ作成,Web制作会社,SEO対策,レスポンシブデザイン,千葉,東京,埼玉,神奈川",
        address: {
            streetAddress: "渋谷２－１９－１５宮益坂ビルディング６０９",
            addressLocality: "渋谷区",
            addressRegion: "東京都",
            postalCode: "150-0002",
            addressCountry: "JP"
        },
        apiEndpoints: {
            test: process.env.GATSBY_API_TEST_ENDPOINT,
            lambda: process.env.GATSBY_API_LAMBDA_TEST_ENDPOINT,
            email: process.env.GATSBY_API_EMAIL_ENDPOINT,
          },
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `SToRy Web Solutions`,
                short_name: `SToRy`,
                start_url: `/`,
                background_color: `#f0f0f0`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `static/favicon/favicon.png`,
              },
        },
    ],
}
