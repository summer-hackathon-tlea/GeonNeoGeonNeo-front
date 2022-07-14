import React, { useEffect, useState } from 'react'
import { Back } from '../../components/Back'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { loginConfig } from '../../config/loginConfig'

export const WithList = () => {
    const [withList, setWithList] = useState([{id:0,dongho:"",title:"" }]);

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
        <div className='w-3/4 m-auto'>
            <Back where={"/"}/>
            <div className='grid grid-cols-2 gap-4 text-white mt-6'>
                {withList.map(data => <Link key={data.id} to={`/ourwith/${data.id}`}>
                    <Card key={data.id} className=' hover:cursor-pointer'>
                        <div className=' text-xl font-bold'>
                            <span>{data.title}</span>
                        </div>
                        <div className='flex items-center mt-2'>
                            <img className=' w-6' alt='희' src='../../icons/room.png' />
                            <span className=' ml-1 text-lg font-extralight'>{data.dongho.replace('-', '동 ')}호</span>
                        </div>
                    </Card>
                    </Link>)}
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