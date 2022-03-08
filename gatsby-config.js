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
    title: "nekosu blog",
    description: "nekosuが書いている技術ブログです",
    author: "nekosu"
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
  ],
};
