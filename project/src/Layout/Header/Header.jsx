import './HeaderStyle.css'

import React from 'react'
import Banner from "../../assets/Images/NetflixLogo.png"
import MeuBanner from "../../assets/Images/MinhaNetflixLogo.png"

import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
            <img className='header__logo' src={MeuBanner} alt="Banner" />
            {/* <img className='header__logo' src={MeuBanner} alt="Banner" /> */}
            </Link>
        </div>
    )
}

export default Header