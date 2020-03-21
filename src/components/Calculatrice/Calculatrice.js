import React, { useState } from 'react'
import './Calculatrice.css'
import { Ecran } from '../Ecran/Ecran';
import { Grille } from '../Grille/Grille'
import {evaluate} from 'mathjs'

export const Calculatrice = () => {

    const [calcul, setCalcul] = useState([])

    const [result, setResult] = useState('0')

    const handleClick = (e) => {
        let newValue = e.currentTarget.textContent
        const copyCalcul = [...calcul]
        const lastIndex = copyCalcul.length - 1

        if ( copyCalcul.length === 0 && newValue === '0') { 
            setCalcul(copyCalcul)
        } else if (copyCalcul.length === 0 && newValue === '.') {
            copyCalcul.push('0')
            copyCalcul.push(newValue)
            setCalcul(copyCalcul)
        } else if (copyCalcul.length === 0 && isNaN(parseFloat(newValue, 10))) {
            setCalcul(copyCalcul)
        } else if (copyCalcul[0] === 0 && newValue ==='0') {
            setCalcul(copyCalcul)
        } else if (copyCalcul[0] === 0 && isNaN(parseFloat(newValue, 10))) {
            setCalcul(copyCalcul)
        } else if (copyCalcul[0] === 0) {
            copyCalcul.pop()
            copyCalcul.push(newValue)
            setCalcul(copyCalcul)
        } else {
            if ( isNaN(parseFloat(copyCalcul[lastIndex], 10)) === true && isNaN(parseFloat(newValue, 10)) === true ) {
                console.log(isNaN(parseFloat(copyCalcul[lastIndex], 10)))
                copyCalcul.pop()
                copyCalcul.push(newValue)
                setCalcul(copyCalcul)
            } else if ( isNaN(parseFloat(copyCalcul[lastIndex], 10)) === true && isNaN(parseFloat(newValue, 10)) === false ) {
                copyCalcul.push(newValue)
                setCalcul(copyCalcul)
            } else {
                copyCalcul.push(newValue)
                setCalcul(copyCalcul)
            }
        }
    }

    // EQUAL 
    const handleEqual = () => {
        const copyCalcul = [...calcul]
        const lastIndex = copyCalcul.length - 1
        const isNanlastElement = isNaN(parseFloat(copyCalcul[lastIndex], 10))
        
        if (isNanlastElement) {
            copyCalcul.pop()
        }

        const regex = /x/gi;
        const newResult = copyCalcul.join('').replace(regex, '*')

        setCalcul([evaluate(newResult)])
        setResult(evaluate(newResult).toString())
    }
    
    // RESET AC
    const handleAC = () => {
        setResult('0')
        setCalcul([])
    }
    //BACK
    const handleBack = () => {
        const copyCalcul = [...calcul]
        copyCalcul.pop()
        setCalcul(copyCalcul)
    }

    return (
        <div className='container-calculatrice'>
            <Ecran result={result} calcul={calcul}/>
            <Grille handleEqual={handleEqual} handleClick={handleClick} handleAC={handleAC} handleBack={handleBack}/>
        </div>
    )
}
