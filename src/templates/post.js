import React from 'react';
import "../styles/post.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Post({ pageContext }) {
    const { title, updatedAt } = pageContext.post.frontmatter;
    const body = pageContext.post.html

    return (
        <Layout>
            {/* <SEO title={title} description={description} /> */}
            <div className="post-header">
                <h1>{title}</h1>
                <p className="post-date">{updatedAt}</p>
            </div>
            <div dangerouslySetInnerHTML={{__html:body}} className="post-body" />
        </Layout>
    )
}

