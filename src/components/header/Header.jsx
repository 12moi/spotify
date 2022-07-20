import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './header.css'

function Header() {
  return (
    <div className='Header_sidebar'>
      <div className='sidebar'>
      <Sidebar />
      </div>
    <nav>
      
  <header_Icons/>
      <div className='sign'>
      <button className='primary'>Sign up</button>
      <button className='btn'>Log in</button>
      </div>
     

    </nav>
    </div>
  )
}

export default Header