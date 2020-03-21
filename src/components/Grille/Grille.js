import React from 'react'
import '../Calculatrice/Calculatrice.css'

export const Grille = ({ handleAC, handleClick, handleBack, handleEqual }) => {
    return (
        <div className="container-grid">
            <div onClick={handleAC} className='btn a'>AC</div>
            <div onClick={handleBack} className='btn b'>B</div>
            <div onClick={handleClick} value='operator' className='btn c'>%</div>
            <div onClick={handleClick} className='btn d'>/</div>
            <div onClick={handleClick} className='btn e'>7</div>
            <div onClick={handleClick} className='btn f'>8</div>
            <div onClick={handleClick} className='btn g'>9</div>
            <div onClick={handleClick} className='btn h'>x</div>
            <div onClick={handleClick} className='btn i'>4</div>
            <div onClick={handleClick} className='btn j'>5</div>
            <div onClick={handleClick} className='btn k'>6</div>
            <div onClick={handleClick} className='btn l'>-</div>
            <div onClick={handleClick} className='btn m'>1</div>
            <div onClick={handleClick} className='btn n'>2</div>
            <div onClick={handleClick} className='btn o'>3</div>
            <div onClick={handleClick} className='btn p'>+</div>
            <div onClick={handleClick} className='btnZero q'>0</div>
            <div onClick={handleClick} className='btn r'>.</div>
            <div onClick={handleEqual} className='btn s'>=</div>
        </div>
    )
}
