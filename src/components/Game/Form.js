import React from 'react'

export default function Form(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit} className='letterForm'>
                <label>Insert a letter or a number</label>
                <input
                    type='text'
                    name='character'
                    placeholder='type...'
                    onChange={props.onChange}
                    value={props.value}
                    className='input'
                    maxLength="1"
                    pattern="[a-zA-Z0-9-]+"
                    required
                />
                <button className='button'>Try</button>
            </form>
        </div>
    )
}
