import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import * as sections from "../../components/sections"
import Fallback from "../../components/fallback"

export default function Homepage(props) {
  // console.log('homepage props', props)
  const { homepage } = props.data

  return (
    <Layout {...homepage} locale={props.params.locale}>
      {homepage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}

export const query = graphql`
query HomePageContent($locale: String!) {
    homepage(node_locale: { eq: $locale }) {
      id
      title
      description
      node_locale
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...ContentfulHomepageHeroContent
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
