import './HeaderStyle.css'

import React from 'react'
import MainTitle from '../../Component/MainTitle/MainTitle'
import Banner from "../../assets/Images/NetflixLogo.png"

import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
            <img className='header__logo' src={Banner} alt="Banner" />
            </Link>
        </div>
    )
}

export default Header