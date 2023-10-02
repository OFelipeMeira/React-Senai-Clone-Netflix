import React from 'react'
import './MainTitleStyle.css'

function MainTitle(props) {
    return (
        <>
            <h1 className='MainTitle'>{props.titulo}</h1>
        </>
    )
}

export default MainTitle