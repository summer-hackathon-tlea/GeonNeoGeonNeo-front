import React from 'react'
import { Back } from '../../components/Back'
import { Header } from '../../components/Header'
import { Form } from './Form'

export const Write = () => {
  return (
    <div className='w-3/4 m-auto'>
        <Header title="WITH 만들기" />
        <Back where="/" />
        <Form />
    </div>
  )
}
