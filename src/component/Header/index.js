import React from 'react'
import logo from "../../assets/images/logo.png"

function Header() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
        <div className='bw_logo'><img src={logo}/></div>
        </div>
        <div className='col-8'>
        <div className='bw_title'><h1>User Management</h1></div>
        </div>
      </div>
    </div>
  )
}

export default Header