import React from 'react'

import './Sidebar.css'
function Sidebar() {
  return (
    <div className='side'>
    <div className="log" href="/node">
      spotify logo
    </div>
        <a className="menu-item" href="/">
      Home
    </a>

    <a className="menu-item" href="/search">
      Search
    </a>

    <a className="menu-item" href="/library">
      Your Library
    </a>

    <a className="menu-item" href="/create">
      Create Playlist
    </a>

    <a className="menu-item" href="/liked">
      Liked Songs
    </a>

    
    </div>
  )
}

export default Sidebar