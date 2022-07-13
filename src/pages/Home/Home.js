import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Home = () => {
  return (
    <div className='text-center'>
      <div className="m-auto w-20 mt-10">
        <img alt='logo' src='../../logos/main-logo.png'/>
      </div>
      <div className='mt-4 font-light'><span>이웃들과 함께 <b>WITH</b></span></div>
      <div className='flex justify-center items-center mt-5'>
        <NavLink to='/ourwith' className=" w-2/12 ml-2 mt-2">
          <PinkMenu className='hover:cursor-pointer w-full h-40 rounded-2xl flex justify-center items-center text-white font-bold '>
            <span>우리의 위드</span>
          </PinkMenu>
        </NavLink>
        <NavLink to='/ourwith' className=" w-2/12 ml-2 mt-2">
          <OrangeMenu className='hover:cursor-pointer w-full h-40 rounded-2xl flex justify-center items-center text-white font-bold '>
            <span>내 위드</span>
          </OrangeMenu>
        </NavLink>
      </div>
      <div className='flex justify-center items-center'>
        <NavLink to='/ourwith' className=" w-2/12 ml-2 mt-2">
          <OrangeMenu className='hover:cursor-pointer w-full h-40 rounded-2xl flex justify-center items-center text-white font-bold '>
            <span>위드 만들기</span>
          </OrangeMenu>
        </NavLink>
        <NavLink to='/ourwith' className=" w-2/12 ml-2 mt-2">
          <PinkMenu className='hover:cursor-pointer w-full h-40 rounded-2xl flex justify-center items-center text-white font-bold '>
            <span>설정</span>
          </PinkMenu>
        </NavLink>
      </div>
    </div>
  )
}

const PinkMenu = styled.div`
  background: linear-gradient(135deg, #F08080 0%, #E95353 100%);
`
const OrangeMenu = styled.div`
  background: linear-gradient(135deg, #FFBD6F 0%, #FF7715 99.99%, #FFBD6F 100%);
`