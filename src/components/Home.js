import React, { Link } from 'react'

export default function Home() {
  return (
    <>
      <div>
        <div>
          <h1>Hello, World</h1>
          <p>This is a simple home page</p>
          <Link to="/saerch?q=Java">Java</Link>
          <Link to="/saerch?q=Python">Python</Link>
          <Link to="/saerch?q=JavaScript">JavaScript</Link>
        </div>
      </div>
    </>
  )
}
