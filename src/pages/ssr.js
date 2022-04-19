import React from "react";
import { graphql } from "gatsby";

export default function SSR({serverData, data}){
	// console.log('data', data)
	// console.log('serverData', serverData)
	return (
	<div>
		<h1>SSR Page</h1>
		<p>Here's a dynamic image fetched during SSR!</p>
		<img src={serverData.message} alt='Im dynamically loaded using SSR!' />
		<p>Here's a static list of pages built at build time!</p>
		<ul>
			{data.allSitePage.edges.map(({node})=><li key={node.id}>{node.path}</li>)}
		</ul>
	</div>
	)
}
export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {}
    }
  }
}
export const query = graphql`
	query {
		allSitePage {
			edges {
				node {
					path
					id
				}
			}
		}
	}
`