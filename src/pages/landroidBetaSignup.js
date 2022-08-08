import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import BetaSignup from "../components/Contact/BetaSignup"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"

const contact = () => {
  return (
    <>
      <Seo title="Landroid Beta Signup" />
      <Layout>
        <SimpleBanner title="Signup as a beta tester for this new object">
          <StaticImage
            className="banner__image"
            src="../../static/macbook-dark.jpg"
            alt="Apple Macbook Dark"
          />
        </SimpleBanner>
        <BetaSignup />
      </Layout>
    </>
  )
}

export default contact
