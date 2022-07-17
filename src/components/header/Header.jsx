import React from 'react'
import './header.css'

function Header() {
  return (
    <header>
  <header_Icons/>
      <div className='sign'>
      <button className='primary'>Sign up</button>
      <button className='btn'>Log in</button>
      </div>
     

    </header>
  )
}

export default Header