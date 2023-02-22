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
              <Link href="/new" legacyBehavior>
                <a>
                  new
                </a>
              </Link>
            </li>
            <li>
              <Link href="/show" legacyBehavior>
                <a>
                  show
                </a>
              </Link>
            </li>
            <li>
              <Link href="/ask" legacyBehavior>
                <a>
                  ask
                </a>
              </Link>
            </li>
            <li>
              <Link href="/jobs" legacyBehavior>
                <a>
                  jobs
                </a>
              </Link>
            </li>
            <li>
              <Link href="/submit" legacyBehavior>
                <a>
                  submit
                </a>
              </Link>
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
            display: flex;
            font-size: 13px;
            background: #FF6601;
          }

          .logo {
            display: inline-block;
            margin: 4px;
          }

          .left {
            flex: 9;
          }

          .right {
            flex: 1;
          }


          ul {
            list-style: none;
          }

          li {
            display: inline-block;
          }

          a {
            display: inline-block;
            padding: 10px;
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