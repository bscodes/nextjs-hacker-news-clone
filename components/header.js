import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="left">
        <Link href="/" legacyBehavior>
          <a>
            <div className="logo">HN</div>
            <div className="title">Hacker Next</div>
          </a>
        </Link>
        <div className="nav">
          <ul>
            <li>
              <Link href="/newest/1" legacyBehavior>
                <a>
                  new
                </a>
              </Link> |
            </li>
            <li>
              <Link href="/show" legacyBehavior>
                <a>
                  show
                </a>
              </Link> |
            </li>
            <li>
              <Link href="/jobs" legacyBehavior>
                <a>
                  jobs
                </a>
              </Link> |
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <Link href="/login" legacyBehavior>
          <a className='login'>login</a>
        </Link>
      </div>

      <style jsx>
        {`

          header {
            background: #FF6601;
            display: flex;
            font-size: 14px;
          }

          .left {
            flex: 9;
          }

          .right {
            flex: 1;
            text-align: right;
          }

          .title, .logo {
            font-weight: bold;
            display: inline-block;
            font-size: 14px;
            text-decoration: none;
            padding-right: 4px;
            color: #000;
            vertical-align: center;
          }

          .login {
            display: inline-block;
            font-size: 11px;
            text-decoration: none;
            color: #000;
          }

          .nav {
            display: inline-block;
            vertical-align: center;
            padding: 2px 0;
          }

          ul {
            list-style: none;
          }

          li {
            display: inline-block;
          }

          a {
            display: inline-block;
            padding: 0 10px;
            font-size: 11px;
            text-decoration: none;
            color: #000;
          }
        `}
      </style>
    </header>
  )
}

export default Header