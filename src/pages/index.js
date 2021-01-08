import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink from "../components/post-link"
import { graphql } from "gatsby";
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="nekosu tech blog" description="ねこすが書いている技術ブログです"/>
      <Hero />
      {data.allContentfulBlog.edges.map(edge =>
        <PostLink key={edge.node.slug} post={edge.node} />)}
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allContentfulBlog {
    edges {
      node {
        title
        image {
          title
          file {
            url
          }
        }
        description {
          description
        }
        slug
        updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
      }
    }
  }
}
`