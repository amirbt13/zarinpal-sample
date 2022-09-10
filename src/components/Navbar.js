import React from 'react'

import logo from '../images/favicon.ico'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='title'>
            <img className='logo' src={logo} alt="zarin-logo"/>
            <h4>زرین پال</h4>
        </div> 
        <div className='options'>
            <ul>
                <li>محصولات</li>
                <li>تعرفه ها</li>
                <li>توسعه دهنده ها</li>
                <li>تماس با ما</li>
                <li>بیشتر</li>
            </ul>
            <button>زرین پال من</button>
        </div>
    </div>
  )
}

export default Navbar