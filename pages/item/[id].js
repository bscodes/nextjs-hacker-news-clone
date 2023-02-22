import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Page from '../../components/page';
import getItem from '../../lib/get-item';
import getComments from '../../lib/get-comments';

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
      <div>
        <div key={story.id} className="item">
          <div className='story'>
            <div className="title">
              <a href={story.url}>
                {story.title}
              </a>
            </div>
            <a href={story.url} className="source">
              {story.url}
            </a>
            <div className="header">




              <div className="score">
                <span>{story.score} points</span>
              </div>

              <div className="date">
                <Link href={`/news/${story.id}`}>{story.date}</Link>
              </div>

              <div className="comment-count">
                <span>{story.comments.length} comments</span>
              </div>
            </div>

            <div className="comments">
              <ul>
                {comments && comments.map(comment => (
                  <li className="comment" key={comment.id}>
                    <div className="text">
                      {comment.text}
                    </div>
                    <div className="children">
                      <ul>
                        {comment && comment?.comments.map(item => (
                          <li className="text" key={item.id}>
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
        .item {
          padding: 10px 20px;
        }

        .header {
          display: flex;
          flex-direction:row;
        }

        .title {
          font-size: 15px;
          margin-bottom: 4px;
        }
        
        .title > a {
          text-decoration: none;
          color: #000;
        }

        .title > a:visited {
          color: #848484;
        }

        .source {
          color: #848484;
          text-decoration: none;
        }

        .score, .date, .comment-count {
          font-size: 12px;
          margin-right: 5px;
        }
        `}
      </style>
    </Page>

  )
}

export default News