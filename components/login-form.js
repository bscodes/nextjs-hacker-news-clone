import React from 'react'

const LoginForm = () => {
  return (
    <div>
      <h4>Login</h4>
      <p>
        user name:  <input type="text" />
        <br />
        password:  <input type="text" />
      </p>
      <button>login</button>

      <p>
        <span>
          <a href="#">forgot password?</a>
        </span>
      </p>
      <h4>create account</h4>
      <p>
        user name:  <input type="text" />
        <br />
        email:  <input type="email" />
        <br />
        password:  <input type="text" />
      </p>
      <button>create account</button>

      <style jsx>
        {`
          p {
            line-height: 20px;
          }
        `}
      </style>
    </div>
  )
}

export default LoginForm