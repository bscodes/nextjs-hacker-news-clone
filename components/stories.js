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
            {offset !== offset ? (
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

          /* .count {
            flex-grow: 1;
            flex-basis: auto;
            vertical-align: top;
            padding-right: 6px;
            display: block;
            font-size: 20px;
          } */
          .story {
            flex: 100;
            display: inline-block;
          }

          .footer {
            display: block;
            padding: 10px 0 40px 30px;
          }

          .footer a {
            color: #000;
            font-size: 20px;
            display: inline-block;
            text-decoration: none;
          }

        `}
      </style>
    </div>
  )
}

export default Stories