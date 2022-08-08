import React from "react"
import FeaturedObject from "../Features/FeaturedObject"
import useAllObject from "../../hooks/use-all-object"

const ObjectFeed = () => {
  const allObject = useAllObject()

  return allObject.map((node, index) => {
    return <FeaturedObject key={index} feature={node} />
  })
}

export default ObjectFeed
