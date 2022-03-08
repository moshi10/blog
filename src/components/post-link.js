import React from "react"
import { Link } from "gatsby";

import "../styles/post-link.css"

export default function PostLink({ post }) {

    const  { title, updatedAt, slug} = post.frontmatter

    // 投稿リンクのURLを定義
    const pageLink = `/post/${slug}/`

    return (
        <Link to={pageLink} className="post-link-anchor">
        <div className="post-link">
            <div className="post-link-text">
                <h2>{title}</h2>                
                    {/* {post.tags && post.frontmatter.tags.map(({ title, slug }) =>
                        <li><Link to={`/post/${slug}`}>#{title}</Link></li>)
                    } */}
                <p className="post-link-date">{updatedAt}</p>
            </div>
        </div>
        </Link>
    )
}
