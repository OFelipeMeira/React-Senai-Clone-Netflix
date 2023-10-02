import './HeaderStyle.css'

import React from 'react'
import MainTitle from '../../Component/MainTitle/MainTitle'
import Banner from "../../assets/Images/bg_header.png"


const Header = () => {
    return (
        <div className='header'>
            <img className='header__logo' src={Banner} alt="Banner" />
            <MainTitle titulo="MyMovies"></MainTitle>
        </div>
    )
}

export default Header