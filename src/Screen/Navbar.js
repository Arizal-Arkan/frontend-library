import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <div id='header' style={{ backgroundColor: 'black', fontStyle: 'Time New Roman' }}>
      <span><Link to='/book' style={{ textDecoration: 'none', color: 'white' }}>LIBRARY</Link> </span>
      <div style={{ float: 'right' }}>
        <span style={{ padding: '20px' }}><Link to='/book' style={{ textDecoration: 'none', color: 'white', fontSize: '15pt' }}>Pinjam</Link></span>
        <span style={{ padding: '20px' }}><Link to='/login' style={{ textDecoration: 'none', color: 'white', fontSize: '15pt' }}>Login</Link></span>
      </div>
    </div>
  )
}

export default Nav
