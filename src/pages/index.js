import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
// import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
// import PerksModule from "../components/PerksModule/PerksModule"
// import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Objects by SOME Studio"
          subTitle="Novel objects for novel problems."
        />
        {/* <BasicTextModule
          title="Find your next object"
          content="We’ve got a selection of objects for you to choose from. Whether you’re looking for a new object or an old one, we’ve got you covered."
          link="/objects"
          linkText="View Objects"
        /> */}
        {/* <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule> */}
        <Features
          title="Featured Objects"
          introduction=""
        />
        <LatestPosts
          title="The Latest from SOME Studio"
          introduction=""
        />
      </Layout>
    </>
  )
}

export default Index
