import React from 'react'
import Header from './header'

const Page = ({ children }) => {
  return (
    <div className="main">
      <Header />
      <div className='page'>{children}</div>

      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          background: #eee;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .main {
          width: 85%;
          margin: auto;
          padding: 10px 0 0 0;
        }

        .page {
          color: #828282;
          background: #fff;
          padding: 3px 10px;
        }

        @media (max-width: 750px) {
          .main {
            padding: 0;
            width: auto;
          }
        }
    `}</style>
    </div>


  )
}

export default Page