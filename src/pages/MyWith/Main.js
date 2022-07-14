import React, { useEffect, useState } from 'react'
import { Back } from '../../components/Back'
import { Header } from '../../components/Header'
import axios from 'axios'
import { loginConfig } from '../../config/loginConfig'
import { WithList } from './WithList'

export const MyMain = () => {
  return (
    <div className='w-3/4 m-auto'>
        <Header title={"나의 WITH"}/>
        <Back where="/" />
        <WithList />
    </div>
  )
}
