import React from 'react'
import './Ecran.css'

export const Ecran = ({ result, calcul }) => {

    let style10

    if (calcul.length <= 10 && result.length <= 10) {
        style10 = {
            color: '#fff',
            marginRight: '44px',
            marginLeft: '44px',
            fontSize: '80px'
        }
    } else if (calcul.length <= 15 && result.length <= 15) {
        style10 = {
            color: '#fff',
            marginRight: '44px',
            marginLeft: '44px',
            fontSize: '50px'
        }
    } else if (calcul.length <= 20 && result.length <= 20) {
        style10 = {
            color: '#fff',
            marginRight: '44px',
            marginLeft: '44px',
            fontSize: '40px'
        }
    } else if (calcul.length <= 27 && result.length <= 27) {
        style10 = {
            color: '#fff',
            marginRight: '44px',
            marginLeft: '44px',
            fontSize: '30px'
        }
    } else if (calcul.length <= 34 && result.length <= 34) {
        style10 = {
            color: '#fff',
            marginRight: '44px',
            marginLeft: '44px',
            fontSize: '23px'
        }
    } else if (calcul.length <= 80 && result.length <= 80) {
        style10 = {
            color: '#fff',
            marginRight: '44px',
            marginLeft: '44px',
            fontSize: '18px'
        }
    } 
    
    return (
        <div className='ecran'>
           { calcul.length === 0 ? 
            <span className='result' style={style10}>{ result }</span> 
            :
            <span className='result' style={style10}>{ calcul }</span>
           }
        </div>
    )
}
