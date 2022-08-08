import { graphql, useStaticQuery } from "gatsby"

const useFeaturedObject = () => {
  const {
    allContentfulObject: { nodes },
  } = useStaticQuery(graphql`
    query featuredObjectLinksQuery {
      allContentfulObject(
        filter: { featureThisObject: { eq: true } }
        sort: { fields: url }
      ) {
        nodes {
          title
          gatsbyPath(filePath: "/objects/{contentfulObject.sku}")
          featureThisObject
          introduction
          headerImage {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  return nodes
}

export default useFeaturedObject
