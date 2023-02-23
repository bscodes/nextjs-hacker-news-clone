import React from 'react'
import Page from '../../components/page';
import Stories from '../../components/stories';
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
  const stories = await getStories('jobstories', { page })

  return {
    props: {
      stories,
      page
    },
    revalidate: 1
  }
}

const Jobs = ({ stories, page }) => {
  return (
    <Page>
      <Stories stories={stories} morePath='jobs' page={page} />
    </Page>
  )
}

export default Jobs