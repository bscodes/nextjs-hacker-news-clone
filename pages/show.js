import React from 'react'
import Page from '../components/page';
import Stories from '../components/stories';
import getStories from '../lib/get-stories';


export async function getStaticProps() {
  const stories = await getStories('jobstories', { page: 1 })

  return {
    props: {
      stories
    },
    revalidate: 1
  }
}


const Show = ({ stories }) => {
  return (
    <Page>
      <Stories stories={stories} showMoreButton={false} />
    </Page>
  )
}

export default Show;