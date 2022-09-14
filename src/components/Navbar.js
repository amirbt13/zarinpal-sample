import React, { useState } from 'react'

import logo from '../images/logo-white.svg'
import arrowDown from '../images/down-arrow-svgrepo-com.svg'
import burgerIcon from '../images/hamburger.svg'
import arrow from '../images/arrow.svg'
import cross from '../images/cross.svg'

const Navbar = () => {

  const [burgerIsShow, setBurgerIsShow] = useState(false)

  const [moreHover, setMoreHover] = useState(false)

  const [productHover, setProductHover] = useState(false)

  return (
    <div className='navbar'>
        <div className='title'>
            <img className='logo' src={logo} alt="zarin-logo"/>
        </div> 
        <div className='options'>
            <ul>
                <li className='nav-more' id='show-product-menu' onMouseEnter={() => {
                  setProductHover(true)
                }}
                onMouseLeave={() => {
                  setProductHover(false)
                }}>
                  <a href='#'>محصولات</a>
                  <img src={arrowDown} alt='down-arrow' />
                  <div className={`${productHover && "show-product"} product-menu`}>
                    <div>
                      <a href='#'>
                        <p>درگاه پرداخت</p>
                        <p>مهندسی شده برای فروش بیشتر</p>
                      </a>
                      <a href='#'>
                        <p>درگاه پرداخت</p>
                        <p>مهندسی شده برای فروش بیشتر</p>
                      </a>
                      <a href='#'>
                        <p>درگاه پرداخت</p>
                        <p>مهندسی شده برای فروش بیشتر</p>
                      </a>
                    </div>
                    <div>
                      <a href='#'>
                        <p>درگاه پرداخت</p>
                        <p>مهندسی شده برای فروش بیشتر</p>
                      </a>
                      <a href='#'>
                        <p>درگاه پرداخت</p>
                        <p>مهندسی شده برای فروش بیشتر</p>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a href='#'>تعرفه ها</a>
                </li>
                <li>
                  <a href='#'>توسعه دهنده ها</a>
                </li>
                <li>
                  <a href='#'>تماس با ما</a>
                </li>
                <li className='nav-more' id='show-more-menu' onMouseEnter={() => {
                  setMoreHover(true)
                }}
                   onMouseLeave={() => {
                     setMoreHover(false)
                   }}
                >
                    <a href='#'>بیشتر</a>
                    <img src={arrowDown} alt='down-arrow' />
                    <ul className={moreHover ? "show-more" : undefined}>
                      <li>سوالات متداول</li>
                      <li>سوالات متداول</li>
                      <li>سوالات متداول</li>
                      <li>سوالات متداول</li>
                      <li>سوالات متداول</li>
                    </ul>
                </li>
            </ul>
            <button>زرین پال من</button>
            <img className='burger-icon' src={burgerIcon} alt='burger-icon' onClick={() => {
              setBurgerIsShow(true)
              console.log(burgerIsShow)
              }} />
        </div>

        <div className={`${burgerIsShow && "show-burger-menu"} burger-menu`}>

            <div className='cross-icon' onClick={() => setBurgerIsShow(false)}>
              <img src={cross} alt='cross' />
            </div>

            <div className='burger-more-items'>
                <ul>
                  <li>
                    <a href='#'>محصولات</a>
                  </li>
                  <li>
                    <a href='#'>تعرفه</a>
                  </li>
                  <div></div>
                  <li>
                    <a href='#'>توسعه دهندگان</a>
                  </li>
                  <li>
                    <a href='#'>تماس با ما</a>
                  </li>
                </ul>
            </div>
            <div className='burger-more-button'>
              <a href='#'>زرین پال من</a>
              <img src={arrow} alt='arrow' />
            </div>
        </div>
    </div>
  )
}

export default Navbar