import { graphql } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet';

const Seo = ({ title, description, meta }) => {
// const data = useStaticQuery(graphql`
// query {
//     site {
//       siteMetadata {
//         title
//         siteUrl
//         description
//       }
//     }
//   }
// `)

    return (
        <Helmet 
            htmlAttributes = {{ lang: "ja-jp" }}
            title = {title}
            titleTemplate = {`%s`}
            meta = {[
                {
                    name: `description`,
                    content: description,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:site_name`,
                    content: `matcha blog`
                },
                {
                    property: `og:locale`,
                    content: `ja_JP`
                },
                {
                    property: `twitter:card`,
                    content: `summary`
                },
                {
                    property: `twitter:site`,
                    content: `@ma_cccha`
                }
            ]}
        
        />
    )
}

export default Seo
