import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import * as sections from "../../components/sections"
import Fallback from "../../components/fallback"

export default function About(props) {
  console.log('props', props)
  const aboutPage = props.data.contentfulAboutPage

  return (
    <Layout {...aboutPage}>
      {aboutPage.blocks.map((block) => {
        const { id, ...componentProps } = block
        const Component = sections[block.internal.type.replace("Contentful", "")] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}

export const query = graphql`
  query AboutPageContent($locale: String!){
    contentfulAboutPage(node_locale: { eq: $locale }, contentful_id: { eq: "2UARLNVAKRNspufH1G0NoS" }) {
      title
      description
      node_locale
      image {
        url
      }
      blocks: content {
        ...AboutHeroContent
        ...AboutStatListContent
        ...HomepageProductListContent
        ...AboutLeadershipContent
        ...HomepageBenefitListContent
        ...AboutLogoListContent
        ...HomepageCtaContent
      }
    }
  }
`
