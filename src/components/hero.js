import React from "react"
import Logo from "./../../static/nekosu.jpg"
import "../styles/hero.css"

export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Meow.<br/>
                Welcome to my blog.<br />
            </h1>
            <div className="hero-author">
                <img src={Logo} className="hero-author-image" alt="avatar"></img>
                <p className="hero-author-text">
                    This blog is written by nekosu.<br/>
                    I am an amazing cat who can speak human language and walk on two legs.
                </p>
            </div>
        </div>
    )
}