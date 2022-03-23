import React from "react"
import { Link } from "gatsby"
import Icon from "../../static/matcha.jpg"
import "../styles/header.css"

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img src={Icon} className="logo-image" alt="logo"></img>
            </Link>
        </header>
    )
}
