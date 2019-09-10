import React from 'react'
import './Word.css'

export default function Word (props) {
    return (
        <div className='word'>
            {props.word.map((character, index) => 
                <span key={index} className='letter'>{character}</span>
            )}
        </div >
    )
}
