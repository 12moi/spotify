


import React, { Component } from 'react'
import {IoIosArrowForward}  from 'react-icons/io'
import {IoIosArrowBack}  from 'react-icons/io'
export class headerarrow extends Component {
  render() {
    return (
      <div className='header_icons' style={{color:'white'}}>
        <a href='h' ><IoIosArrowBack/></a>
        <a href='h' ><IoIosArrowForward/></a>
        
      </div>
    )
  }
}

export default headerarrow