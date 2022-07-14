import React from 'react'
import { Header } from '../../components/Header'
import { WithList } from './WithList'

export const Main = () => {
  return (
    <div>
      <Header title={"우리의 WITH"} />
      <WithList />
    </div>
  )
}
