import React from 'react'

export const Header = (props) => {
  return (
      <div className='flex justify-center text-base font-bold h-12 items-center'>{props.title}</div>
  )
}
