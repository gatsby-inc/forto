import * as React from "react"
import { graphql } from "gatsby"
import { Container, Heading, FlexList, LinkList, Section, Box } from "./ui"
import { LogoItem } from "./logo-list"

export default function AboutLogoList(props) {
  return (
    <Section>
      <Container>
        <Box center>
          {props.heading && <Heading>{props.heading}</Heading>}
          <LinkList links={props.links} />
        </Box>
      </Container>
      <Container width="narrow">
        <Box paddingY={6}>
          <FlexList gap={5} variant="center">
            {props.logos.map((logo, i) => (
              <li key={`${logo.id}-${i}`}>
                <LogoItem {...logo} />
              </li>
            ))}
          </FlexList>
        </Box>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment AboutLogoListContent on ContentfulAboutLogoList {
    heading
    links {
      href
      text
    }
    logos {
      alt
      image {
        gatsbyImageData
        alt:description
      }
    }
    internal {
      type
    }
  }
`
