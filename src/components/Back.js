import React from 'react'

export const Back = (props) => {
  return (
    <div className='flex w-full'>
        <img className='w-6' src='../icons/arrow-left.png' alt='희' />
        <button className=' font-semibold' onClick={() => window.location.href = props.where}>뒤로가기</button>
    </div>
  )
}