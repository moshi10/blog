const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
 {
  query MyQuery {
    allMarkdownRemark(filter: {frontmatter: {Published: {eq: true}}}, sort: {fields: frontmatter___CreatedAt, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            Published
            title
            Tags {
              name
            }
            Slug
            CreatedAt(formatString: "YYYY/MM/DD")
            UpdatedAt(formatString: "YYYY/MM/DD")
          }
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
 const path = edges.node.frontmater.Slug
 

  edges.forEach(edge => {
    createPage({
      path: path,
      component: path.resolve("./src/templates/post.js"),
      context: { post: edge.node },
    })
  })
}

//タグ
//  edges.forEach(edge => {
//    createPage({
//      path: `/post/${edge.node.slug}`,
//      context: {
//        slug: edge.node.slug
//      },
//    })
//  })
