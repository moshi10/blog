import React from 'react';
import "../styles/post.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Post({ pageContext }) {
    const { title, updatedAt, description, slug } = pageContext.post.frontmatter;
    const body = pageContext.post.html
    const pageLink = `/post/${slug}/`

    return (
        <Layout>
            <Seo title={title} description={description} url={pageLink}/>
            <div className="post-header">
                <h1>{title}</h1>
                <p className="post-date">{updatedAt}</p>
            </div>
            <div dangerouslySetInnerHTML={{__html:body}} className="post-body" />
        </Layout>
    )
}

