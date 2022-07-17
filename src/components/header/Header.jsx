import React from 'react'
import './header.css'

function Header() {
  return (
    <header>
      <div className='container header_container'>
      <button className='primary'>Sign up</button>
      <button className='btn'>Log in</button>
      </div>

    </header>
  )
}

export default Header