import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import MidBook from "../components/front-book"
import Author from "../components/author"
import ParallaxBottom from "../components/parallax-bottom"
import FeaturedLogos from "../components/mid-main"

const IndexPage = (props) => (
    <Layout>
        <Nav pathExt={props.path} />
        <Banner /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <MidBook />
        <Author />
        <ParallaxBottom />
        <FeaturedLogos />
    </Layout>
)

export default IndexPage
