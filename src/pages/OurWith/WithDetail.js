import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { Back } from '../../components/Back';
import { Header } from '../../components/Header';
// import withList from '../../datas/withList.json';
import axios from 'axios'
import { loginConfig } from '../../config/loginConfig';

export const WithDetail = () => {
    const { id } = useParams();
    const [clickedData, setClickedData] = useState({id:0,dongho:"",title:"",content:"",maxNumberOfPeople:0, currentNumberOfPeople:0, status:"READY" });
    const [process, setProcess] = useState("");
    const [notice, setNotice] = useState(false);
    const statusColor = useRef();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getData = async () => {
        try {
            const res = await axios.get(`/with/${id}`, loginConfig);
            setClickedData(() => res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const showNotice = async () => {
        try {
            const res = await axios.post(`/with/${id}/member`,{}, loginConfig)
            setNotice(gg => !gg);
            alert("참가되었습니다!")
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    useEffect(() => {
        getData()
        if(clickedData.status === "READY") {
            setProcess("대기 중")
            statusColor.current.style.border = "2px solid #FFB7D2";
            statusColor.current.style.color = "#FFB7D2";
        }
        else if(clickedData.status === "IN") {
            setProcess("진행 중")
            statusColor.current.style.border = "2px solid #FFC85C";
            statusColor.current.style.color = "#FFC85C";
        }
        else if(clickedData.status === "FINISH") {
            setProcess("완료")
            statusColor.current.style.border = "2px solid #A5D9FF";
            statusColor.current.style.color = "#A5D9FF";
        }
        
    }, [id, notice, process, clickedData])
    return (
        <div className='w-3/4 m-auto'>
            <Header title="우리의 WITH"/>
            <Back where="/ourwith" />
            <div className=' mt-12'>
                <div className=' flex items-center mt-3'>
                    <img className=' w-6' alt='희' src='../../icons/room-black.png' />
                    <span className=' ml-1 text-lg font-extralight'>{clickedData.dongho.replace('-', '동 ')}호</span>
                </div>
                <div className=' text-xl font-bold flex mt-3 '>
                    <span>{clickedData.title}</span>
                    <Status ref={statusColor} className='inline text-sm'>
                        <span>{process}</span>
                    </Status>
                </div>
                <div className=' text-xl font-medium mt-3'>
                    <span>{clickedData.content}</span>
                </div>
                <div className=' text-md font-medium mt-3 text-gray-500'>
                    <span>참여 인원 ( {clickedData.currentNumberOfPeople} / {clickedData.maxNumberOfPeople} ) 명</span>
                </div>
                <div className='m-auto w-40 mt-5'>
                    <Button onClick={showNotice}>참가하기</Button>
                </div>
            </div>
        </div>
    )
}

const Button = styled.button`
    background-color: #F08080;
    color: white;
    font-weight: bold;
    width: 100%;
    padding: 20px 40px;
    border-radius: 10px;
    :hover {
        background-color: #EA5555;
    }
`

const Status = styled.div`
    margin-left: 20px;
    border: 2px solid #FFB7D2;
    line-height: 30px;
    border-radius: 52px;
    padding: 0 20px;
    height: 34px;
    color: #FFB7D2;
`