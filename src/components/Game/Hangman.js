import React from 'react'
import './Hangman.css'
export default function Hangman(props) {
    const height = (300 - (props.points * 30))
    return (
        <div className='hangman' style={{height: height + 'px'}}>
            <img src={require('./hangman.jpeg')} alt='hangman'/>
        </div>
    )

}
