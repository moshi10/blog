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
      {data.allContentfulArticle.edges.map(edge =>
        <PostLink key={edge.node.slug} post={edge.node} />)}
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allContentfulArticle {
    edges {
      node {
        title
        description {
          description
        }
        slug
        createdAt(locale: "ja-JP", formatString: "YYYY-MM-DD")
        updatedAt(locale: "ja-JP", formatString: "YYYY-MM-DD")
        tags {
          title
          slug
        }
      }
    }
  }
}

`
