import React from 'react'
import './Word.css'

export default function Word (props) {
    const wordArray = props.word.split('')
    return (
        <div className='word'>
            {wordArray.map((character, index) => 
                <div key={index} className={character}>
                    <span className='letter'>{character}</span>
                </div>
            )}
        </div >
    )
}
