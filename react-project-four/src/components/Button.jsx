import React from 'react'

const Button = (props) => {
  return (
    <div className='button-container'>
            {props.children}
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    </div>
  )
}

export default Button
