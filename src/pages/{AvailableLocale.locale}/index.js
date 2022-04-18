import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import * as sections from "../../components/sections"
import Fallback from "../../components/fallback"

export default function Homepage(props) {
  // console.log('homepage props', props)
  const homepage = props.data.contentfulHomepage

  return (
    <Layout {...homepage}>
      {homepage.blocks.map((block) => {
        console.log('block', block)
        const { id, ...componentProps } = block
        const Component = sections[block.internal.type.replace("Contentful", "")] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}

export const query = graphql`
query HomePageContent($locale: String!) {
    contentfulHomepage(node_locale: { eq: $locale }, contentful_id: { eq: "1zzRbzEpxqUFmclOIbcipZ" }) {
      title
      description
      node_locale
      image {
        url
      }
      blocks: content {
        ...HomepageHeroContent
        ...HomepageFeatureListContent
        ...HomepageCtaContent
        ...HomepageLogoListContent
        ...HomepageTestimonialListContent
        ...HomepageBenefitListContent
        ...HomepageStatListContent
        ...HomepageProductListContent
      }
    }
  }
`
