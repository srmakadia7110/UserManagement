import React from 'react'
import logo from "../../assets/images/logo.png"

function Header() {
  return (
    <div className='bw_header'>
        <div className='bw_logo'><img src={logo}/></div>
        <div className='bw_title'><h1>Media Platform</h1></div>
        <div className='bw_search'><button>Upload</button><button>Singin</button></div>
    </div>
  )
}

export default Header