import Link from 'next/link'
import React from 'react'
import Story from './updated-story'

const Stories = ({
  page = 1,
  stories,
  offset = null
}) => {
  return (
    <div>
      {stories && stories.map((story, i) => {
        return (
          <div key={story.id} className="item">
            {offset !== null ? (
              <>
                <span className='count'>{
                  offset + i + 1
                }</span>
              </>
            ) : null}
            <Story
              id={story.id}
              title={story.title}
              date={story.date}
              url={story.url}
              user={story.user}
              score={story.score}
              commentsCount={story.comments.length}
            />
          </div>
        )
      })}
      <footer className='footer'>
        <Link href={`/news/${page + 1}`} legacyBehavior>
          <a>More</a>
        </Link>
      </footer>

      <style jsx>
        {`
          .item {
            display: flex;
            margin: 10px 0;
          }

          .count {
            flex-basis: auto;
            vertical-align: top;
            font-size: 14px;
            margin-right: 5px;
            display: block;
            width: 20px;
          }

          .count::after {
            content: '.';
          }

          .story {
            flex: 100;
            display: inline-block;
          }

          .footer {
            padding: 10px 0 40px 30px;
          }

          .footer a {
            color: #000;
            font-size: 14px;
            display: inline-block;
            text-decoration: none;
          }

        `}
      </style>
    </div>
  )
}

export default Stories