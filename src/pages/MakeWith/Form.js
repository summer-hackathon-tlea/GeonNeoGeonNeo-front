import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { loginConfig } from '../../config/loginConfig';

export const Form = () => {
  const [maxNum, setMaxNum] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postWith = async () => {
    try {
      const res = await axios.post('/with',
      {
        "content": content,
        "maxNumberOfPeople": maxNum,
        "title": title
      },
      loginConfig)
      alert("작성이 완료되었습니다!")
      window.location.href = "/ourwith"
    } catch (error) {
      alert(error);
    }
  }

  const checkIsEmpty = () => {
    if(maxNum < 2 || title === "" || content === "") {
      alert("빈틈없이 잘 작성했는지 확인해주세요.");
    } else {
      postWith()
    }
  }

  return (
    <div className='w-full'>
        <div className='block mt-2 mb-2'>
          <label>최대 인원</label>
          <NumInput onChange={(e) => setMaxNum(e.target.value)} type="number" />
        </div>
        <InputBox className='w-full'>
          <TextInput onChange={(e) => setTitle(e.target.value)} type="text" placeholder='제목을 입력하세요.'/>
          <hr className=' w-4/5 m-auto' />
          <TextInput onChange={(e) => setContent(e.target.value)} type="text" placeholder='내용을 입력하세요.'/>
        </InputBox>
        <div className='flex '>
          <Button onClick={() => checkIsEmpty()}>등록</Button>
        </div>
    </div>
  )
}

const Button = styled.button`
  background: #F08080;
  border-radius: 15px;
  color: white;
  padding:20px 40px;
  margin:20px 0 0 auto;
  &:hover {
      background-color: #EA5555;
  }
`


const NumInput = styled.input`
  display: flex;
  background-color: #F5F5F5;
  padding-left: 10px;
  height: 40px;
  width: 100px;
  border-radius: 10px;
`

const InputBox = styled.div`
  background-color: #F5F5F5;
  height: 300px;
  width: 100%;
  margin: auto;
  text-align: center;
  border-radius: 20px;
`

const TextInput = styled.input`
  width: 70%;
  margin: auto;
  height: 150px;
  background-color: #F5F5F5;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 25px;
  }
`