import React from 'react'
import Page from '../../components/page'
import Stories from '../../components/stories'
import getStories from '../../lib/get-stories';


export function getStaticPaths() {
  return {
    paths: [{
      params: {
        page: '1'
      }
    }],
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params: { page = 1 } }) {
  page = Number(page);
  const stories = await getStories('newstories', { page })

  return {
    props: {
      stories,
      page
    },
    revalidate: 1
  }
}



const Newest = ({ stories, page }) => {
  return (
    <Page>
      <Stories stories={stories} morePath="newest" page={page} showMoreButton />
    </Page>
  )
}

export default Newest