import React from "react"
import { Link } from "gatsby"
import Logo from "../../static/nekosu.jpg"
import "../styles/header.css"

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img src={Logo} className="logo-image" alt="logo"></img>
            </Link>
        </header>
    )
}