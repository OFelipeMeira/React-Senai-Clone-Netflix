import React from 'react'
import MainTitle from '../Component/MainTitle'
import Banner from "../Images/bg_header.png"
import { useNavigate } from 'react-router-dom'


const Header = () => {
    return (
        <div className='header-containter'>
            <img src={Banner} alt="Banner" />
            <MainTitle titulo="MyMovies"></MainTitle>
            <button>Login</button>
        </div>
    )
}

export default Header