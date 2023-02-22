import Link from 'next/link'
import React from 'react'
import timeAgo from '../lib/time-ago'
import parse from 'url-parse'

const Story = ({
  id,
  title,
  date,
  url = null,
  user,
  score,
  commentsCount = 0
}) => {
  const pluralCommentCount = (count, s) => s + (count === 0 || count > 1 ? 's' : '')
  const { host } = parse(url);


  return (
    <div className="story">
      <div className="title">
        {url ? (
          <a href={url}>
            {title}
          </a>
        ) : (
          <Link href={`/item/${id}`}>
            {title}
          </Link>
        )}
        {url && (
          <span className="source">
            <a href={`http://${host}`}>{host.replace(/^www\./, '')}</a>
          </span>
        )}
      </div>
      <div className="meta">
        <span className='point'>{score} points</span>
        <Link href={`/user?id=${user}`} legacyBehavior>
          <a>
            User: {user}
          </a>
        </Link>
        <Link href={`/item/${id}`} legacyBehavior className='timeAgo'>
          <a>
            {date && timeAgo(new Date(date))}{' '}ago
          </a>
        </Link>
        {!!commentsCount && (<Link href={`/item/${id}`} legacyBehavior className='commentsCount'>
          <a>
            {commentsCount} {pluralCommentCount(commentsCount, 'comment')}
          </a>
        </Link>)}
      </div>

      <style jsx>
        {`
          .title {
            font-size: 12px;
            margin-bottom: 3px;
          }

          .title > a {
            color: #000;
            text-decoration: none;
          }

          .title > a:visited {
            color: red;
          }
          
          .meta {
            font-size: 12px;
          }

          .meta > a {
            color: #828282;
            text-decoration: none;
            margin-right: .5rem;
          }

          .point {
            margin-right: .5rem;
          }

          .source {
            font-size: 12px;
            display: inline-block;
            margin-left: 5px;
          }
  
          .source a {
            color: #828282;
            text-decoration: none;
          }
  
          .source a:hover,
          .meta a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  )
}

export default Story