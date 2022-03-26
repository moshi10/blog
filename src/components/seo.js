import React from 'react'
import { Helmet } from 'react-helmet';
import Icon from '../../static/matcha.jpg'


const Seo = ({ title, description, url }) => {
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
                },
                {
                    property: `og:url`,
                    content: url
                },
                {
                    property: `og:image`,
                    content: Icon
                }
            ]}
        
        />
    )
}

export default Seo
