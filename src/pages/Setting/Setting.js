import React, { useEffect, useState } from 'react'
import { Back } from '../../components/Back'
import { Header } from '../../components/Header'

export const Setting = () => {
    const alram = localStorage.getItem("alram");
    const [alramSetting, setAlramSetting] = useState("")
    const [isToggle, setIsToggle] = useState(true);

    const toggle = () => {
        setIsToggle(tg => !tg);
        localStorage.setItem("alram", isToggle)
        console.log(localStorage.getItem("alram"));
        isToggle ? setAlramSetting(() => "../../icons/turn-on.png") : setAlramSetting( () =>  "../../icons/turn-off.png")
    }

    useEffect(() => {
        alram ? setAlramSetting("../../icons/turn-on.png") : setAlramSetting("../../icons/turn-off.png")
    }, [])

  return (
    <div className='w-3/4 m-auto'>
        <Header title="설정" />
        <Back where="/" />
        <div onClick={toggle} className='flex bg-slate-200 mt-4 p-4 rounded-xl'>
            <span>알림 설정</span>
            <img className='w-13 h-5 ml-auto' alt='' src={alramSetting} />
        </div>
    </div>
  )
}
