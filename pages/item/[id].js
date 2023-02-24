import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import Page from '../../components/page';
import getItem from '../../lib/get-item';
import getComments from '../../lib/get-comments';
import timeAgo from '../../lib/time-ago';
import Comment from '../../components/comment';
import Commentform from '../../components/comment-form';
import Item from '../../components/item';

export function getStaticPaths() {
  return {
    paths: [{
      params: {
        id: '29001721'
      }
    }],
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params: { id = 1 } }) {
  const story = await getItem(id);

  return {
    props: {
      story
    }
  }
}



const News = ({ story }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    if (story) {
      getComments(story.comments)
        .then(comments => {
          setComments(comments);
        })
        .catch(err => {
          console.log({ err });
        })
    }
  }, [story])


  return (
    <Page>
      <Item story={story} comments={comments} />
    </Page>

  )
}

export default News