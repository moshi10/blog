const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
 {
  allContentfulArticle {
    edges {
      node {
        title
        body {
          childMarkdownRemark {
            html
          }
        }
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

  `)

  if(result.errors){
      reporter.panicOnBuild(`Error while running GraphQL query.`)
  }

 const { edges } = result.data.allContentfulArticle

  edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.createdAt}-${edge.node.slug}`,
      component: path.resolve("./src/templates/post.js"),
      context: { post: edge.node },
    })
  })
}