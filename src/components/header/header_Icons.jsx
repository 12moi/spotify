


import React, { Component } from 'react'
import {IoIosArrowBack}  from 'react-icons/fa'
import {IoIosArrowForward}  from 'react-icons/fa'
export class header_Icons extends Component {
  render() {
    return (
      <div className='header_icons' style={{color:'white'}}>
        <a href='h' ><IoIosArrowBack/></a>
        <a href='h' ><IoIosArrowForward/></a>
        
      </div>
    )
  }
}

export default header_Icons