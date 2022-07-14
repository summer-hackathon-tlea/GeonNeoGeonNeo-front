import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios';
import { Alram } from '../Notification/Alram';
import { loginConfig } from '../../config/loginConfig';

export const Home = () => {
  const [showAlram, setShowAlram] = useState();
  const getNotification = () => {
    try {
      const res = axios.get('/notification', loginConfig)
      .then(data => {console.log(data.data); setShowAlram(<Alram data={data.data} />)});
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if(localStorage.getItem("token") === "") {
      alert("로그인이 되어있지 않아 로그인 페이지로 이동합니다.")
      window.location.href = "/login";

    }
    getNotification();
    setInterval(() => {getNotification()}, 2000)
  }, [])

  return (
    <div className='text-center'>
    {showAlram}
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
        <NavLink to='/mywith' className=" w-2/12 ml-2 mt-2">
          <OrangeMenu className='hover:cursor-pointer w-full h-40 rounded-2xl flex justify-center items-center text-white font-bold '>
            <span>내 위드</span>
          </OrangeMenu>
        </NavLink>
      </div>
      <div className='flex justify-center items-center'>
        <NavLink to='/makewith' className=" w-2/12 ml-2 mt-2">
          <OrangeMenu className='hover:cursor-pointer w-full h-40 rounded-2xl flex justify-center items-center text-white font-bold '>
            <span>위드 만들기</span>
          </OrangeMenu>
        </NavLink>
        <NavLink to='/setting' className=" w-2/12 ml-2 mt-2">
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