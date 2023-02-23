import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import Page from '../../components/page';
import getItem from '../../lib/get-item';
import getComments from '../../lib/get-comments';
import timeAgo from '../../lib/time-ago';
import Comment from '../../components/comment';
import Commentform from '../../components/comment-form';

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
  const [toggled, setToggled] = useState(false);
  const pluralCommentCount = (count, s) => s + (count === 0 || count > 1 ? 's' : '')
  const ref = useRef(false);

  const handleToggle = (e) => {
    console.log(ref);
    //setToggled(!toggled)
  }

  /* useEffect(() => {
    handleToggle();


  }, [ref]) */
  console.log({ comments });

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
                {comments && comments.map((comment) => (
                  <li className="comment" key={comment.id}>
                    <div className="text">
                      {comment.text}
                    </div>

                    <div className="form">
                      <Commentform />
                    </div>
                    <div className="children">
                      {comment && comment?.comments.map(item => (
                        <Comment key={comment.id} {...comment} />
                      ))}
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

        .comments {
          padding: 10px 0 20px;
        }

        .children {
          padding-top: 15px;
        }

        ul {
          list-style: none;
        }
        `}
      </style>
    </Page>

  )
}

export default News