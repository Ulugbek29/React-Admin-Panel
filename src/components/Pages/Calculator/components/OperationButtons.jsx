import React from 'react'

export default function OperationButtons({operation, handleOperationalClick}) {

  return (
    <button onClick={()=> handleOperationalClick(operation)} className='btn operation__btns'>{operation}</button>
    )
}
