import React from 'react'
import Page from '../../components/page';
import Stories from '../../components/stories'
import getStories from '../../lib/get-stories'

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
  try {
    page = Number(page);
    const stories = await getStories('topstories', { page });

    return {
      props: {
        stories,
        page
      }
    }
  } catch (err) {
    console.log({
      Error: err
    });
  }
}



const NewsList = ({ page, stories }) => {
  const offset = (page - 1) * 30;

  return (
    <Page>
      <Stories stories={stories} page={page} offset={offset} />
    </Page>
  )
}

export default NewsList