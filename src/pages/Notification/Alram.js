import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { loginConfig } from '../../config/loginConfig';

export const Alram = (props) => {

    const moveToContent = async (withId, id) => {
        try {
            const res = await axios.put(`/notification/${id}`, {}, loginConfig)
            window.location.href = `/ourwith/${withId}`
        } catch (error) {
            alert(error)
        }
    }

  return (
    <Notification>
        { props.data.map(a => {
            const al = a.read ? <div></div> : <Card onClick={() => moveToContent(a.withId, a.id)}>
            <img className='w-7 h-7 mt-5' alt='' src='../../icons/notification-filled.png'/>
            <span className=' font-medium'>{a.content}</span>
            </Card>
            return al;
        })}
    </Notification>
  )
}

const Notification = styled.div`
    position: fixed;
    right:0;
`

const Card = styled.div`
    display: flex;
    width: 300px;
    height: 70px;
    border-radius: 20px;
    line-height: 70px;
    padding-left: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    margin-bottom: 15px;
    margin-right: 20px;
    &:hover {
        cursor: pointer;
    }
`