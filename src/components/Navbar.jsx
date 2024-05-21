import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="logo">Logo</div>
        <div className="category">
          <Link className="link"to="/?cat=politics">Politics</Link>
          <Link className="link"to="/?cat=politics">Politics</Link>
          <Link className="link"to="/?cat=politics">Politics</Link>
          <Link className="link"to="/?cat=politics">Politics</Link>
          <Link className="link"to="/?cat=politics">Politics</Link>
          <Link className="link"to="/?cat=politics">Politics</Link>
          <span>Himani</span>
          <span>Logout</span>
          <span className='write'>
            <Link  className="link" to="/write">Write</Link>
          </span>

          

        </div>

      </div>
    </div>
  )
}

export default Navbar