const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
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


  `)

  if(result.errors){
      reporter.panicOnBuild(`Error while running GraphQL query.`)
  }

 const edges = result.data.allMarkdownRemark.edges

  edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.frontmatter.slug}`,
      component:path.resolve("./src/templates/post.js") ,
      context: { post: edge.node },
    })
  })
}
