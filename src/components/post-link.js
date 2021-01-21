import React from "react"
import { Link } from "gatsby";
import "../styles/post-link.css"

export default function PostLink({ post }) {

    // const { title, updatedAt, image } = post;
    const { title, updatedAt, tags } = post;
    const description = post.description.description;
    const pageLink = `/post/${post.createdAt}-${post.slug}/`

    return (
        <Link to={pageLink} className="post-link-anchor">
        <div className="post-link">
            {/* <div>
                <img src={image.file.url} className="post-link-image" alt="post-cover"></img>
            </div> */}
            <div className="post-link-text">
                <h2>{title}</h2>
                <p className="post-link-body">{description}</p>
                
                    {post.tags && post.tags.map(({ title, slug }) =>
                        <li><Link to={`/post/${slug}`}>#{title}</Link></li>)
                    }
                
                <p className="post-link-date">{updatedAt}</p>
            </div>
        </div>
        </Link>
    )
}