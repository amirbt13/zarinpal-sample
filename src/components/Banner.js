import React from 'react'

import home from '../images/home.svg'
import arrowDown from '../images/down-arrow-svgrepo-com.svg'

const Banner = () => {
  return (
    <main>
    <div className='banner'>
        <div className='banner-text'>
            <h2>بیش از ۱۲ سال</h2>
            <h2>انتخاب مطمئنِ کسب و کارهای آنلاین</h2>
                
            <p>زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی، سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها ارائه کرده است؛ با این هدف که در افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای ایفا کند.
            </p>

            <div className='banner-buttons'>
                <button className='register-btn'>ثبت نام</button>
                <button className='login-btn'>ورود</button>
            </div>
        </div>
        <div className='banner-img'>
            <img src={home} alt='home' />
        </div>
    </div>
    <div className='go-down'>
      <div>

      </div>
      <img src={arrowDown} alt='arrowDown' />
    </div>
    </main>
  )
}

export default Banner