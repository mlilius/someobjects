import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Thank you for your interest"
          subTitle="We will be in touch soon."
        />
      </Layout>
    </>
  )
}

export default Index
