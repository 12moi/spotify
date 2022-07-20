import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Headerarrow from './Headerarrow'
import './header.css'

function Header() {
  return (
    <div className='Header_sidebar'>
      <div className='sidebar'>
      <Sidebar />

      
      <Headerarrow/>
      </div>
    <nav>
    
 <header/>
      <div className='sign'>
      <button className='primary'>Sign up</button>
      <button className='btn'>Log in</button>
      </div>
     

    </nav>
    </div>
  )
}

export default Header