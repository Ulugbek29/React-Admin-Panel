import React from 'react'

export default function DigitButtons({digit, handleClick}) {
  return (
    <button onClick={()=> handleClick(digit)} className='btn digit__btns'>{digit}</button>
    )
}
