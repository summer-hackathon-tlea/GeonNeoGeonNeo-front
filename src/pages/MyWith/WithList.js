import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { loginConfig } from '../../config/loginConfig'

export const WithList = () => {
    const [withList, setWithList] = useState([{id:0,dongho:"",title:"" }]);
    const userId = localStorage.getItem("dongho");

    const getData = async () => {
        try {
            const res = await axios.get("/with",
            loginConfig)
            setWithList(() => res.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])
  return (
    <div className='w-full m-auto'>
        <div className='grid grid-cols-2 gap-4 text-white mt-6'>
            {withList.map(data => data.dongho === userId ? <Link key={data.id} to={`/ourwith/${data.id}`}>
                <Card key={data.id} className=' hover:cursor-pointer'>
                    <div className=' text-xl font-bold'>
                        <span>{data.title}</span>
                    </div>
                    <div className='flex items-center mt-2'>
                        <img className=' w-6' alt='희' src='../../icons/room.png' />
                        <span className=' ml-1 text-lg font-extralight'>{data.dongho.replace('-', '동 ')}호</span>
                    </div>
                </Card>
            </Link> : <Link className=' hidden'key={data.id} to={`/ourwith/${data.id}`} ></Link>)}
        </div>
    </div>
  )
}


const Card = styled.div`
    /* display: flex; */
    height: 130px;
    padding:30px;
    background-color: #F4978E;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
`