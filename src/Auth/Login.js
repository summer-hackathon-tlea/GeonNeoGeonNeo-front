import React, { useState } from 'react'
import axios from "axios";
import styled from 'styled-components';

export const Login = () => {
    const [dongho, setDongho] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        localStorage.setItem("dongho", dongho);
        localStorage.setItem("alram", true);
        try {
            const res = await axios.post("/user/login", {
                "dongho":dongho,
                "password":password
            });
            localStorage.setItem("token", res.data.accessToken)
            window.location.href = "/"
        } catch (error) {
            alert(error);
        }
    }
  return (
    <div className='w-3/4 m-auto text-center'>
        <div className='m-auto w-20 mt-24 mb-20'>
            <img alt='' src='../../logos/main-logo.png' />
        </div>
        <div className='w-full'>
            <Input className='m-auto' type="text" onChange={(e) => setDongho(e.target.value)} placeholder="동호수 입력 ex : 104-101"/>
            <Input className='mt-2 m-auto' type="password" onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호 입력"/>
        </div>
        <Button onClick={login}>로그인</Button>
    </div>
  )
}

const Input = styled.input`
    display: block;
    border: 1px solid #F4978E;
    border-radius: 20px;
    padding: 20px;
    width: 400px;
    height: 50px;
`

const Button = styled.button`
    background: #F4978E;
    border-radius: 20px;
    width: 400px;
    height: 50px;
    margin-top: 20px;
    color: white;
    line-height: 50px;
    font-weight: bold;
`