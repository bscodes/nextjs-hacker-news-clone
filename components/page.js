import React from 'react'
import Header from './header'

const Page = ({ children }) => {
  return (
    <div className="main">
      <Header />
      <div className='page'>{children}</div>

      <style jsx>{`
      .main {
        width: 85%;
        margin: auto;
        padding: 10px 10px;
        background: #F6F6EE;
      }

      .page {
        color: #ddd
        background: #fff;
      }
    `}</style>
    </div>


  )
}

export default Page