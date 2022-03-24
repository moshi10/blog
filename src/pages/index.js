import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import Seo from "../components/seo"

export default function Home({ data }) {
  
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Seo title="matcha blog" description="matchaのブログβ" url="https://matcha-blog.netlify.app/"/>
      {posts.map((post,i) =>
        <PostLink key={i} post={post.node} />)}
    </Layout>
  )
}

export const query = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {published: {eq: true}}}, sort: {fields: frontmatter___createdAt, order: DESC}) {
    edges {
      node {
        id
        html
        frontmatter {
          published
          title
          tags {
            name
          }
          slug
          createdAt(formatString: "YYYY/MM/DD")
          updatedAt(formatString: "YYYY/MM/DD")
          description
        }
      }
    }
  }
}

`
