import React from "react"
import { Link } from "gatsby";

import "../styles/post-link.css"

export default function PostLink({ post }) {

    const  { title, createdAt, slug, description} = post.frontmatter

    // 投稿リンクのURLを定義
    const pageLink = `/post/${slug}/`

    return (
        <Link to={pageLink} className="post-link-anchor">
        <div className="post-link">
            <div className="post-link-text">
                <h2>{title}</h2>
                <p>{description}</p>                
                <p className="post-link-date">{createdAt}</p>
            </div>
        </div>
        </Link>
    )
}
