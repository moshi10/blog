/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "matcha blog",
    description: "matchaが書いている技術ブログです",
    author: "matcha"
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
    {
      resolve:`gatsby-plugin-postcss`,
    },
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.GATSBY_NOTION_TOKEN,
        databaseId: process.env.GATSBY_NOTION_DATABASE_ID,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_ID,
        ],
      },
    },
  ],
};

