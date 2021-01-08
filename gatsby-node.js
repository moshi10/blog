const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
  {
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
        body {
            childMarkdownRemark{
                html
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
  `)

  if(result.errors){
      reporter.panicOnBuild(`Error while running GraphQL query.`)
  }

 const { edges } = result.data.allContentfulBlog

  edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.slug}`,
      component: path.resolve("./src/templates/post.js"),
      context: { post: edge.node },
    })
  })
}