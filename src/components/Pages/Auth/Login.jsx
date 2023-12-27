import React, { useState } from "react";
import { authHandler } from "../../../services/authServices";

export default function Login() {

    const [userData, setUserData] = useState({username: "", password: ""})

    const {username, password} = userData

    const inputValue = (value)=> {
        setUserData((prev)=> ({
            ...prev,
            username: value
        }))
    }

    const passwordValue = (value)=> {
        setUserData((prev)=> ({
            ...prev,
            password: value
        }))
    }

    const handelLogin = (e) => {
        e.preventDefault()
        authHandler(userData)
        setUserData({username: "", password: ""})
    }
    
    // useEffect(()=> {
    //     handelLogin()
    // },[userData])

    console.log(userData)
  return (
    <>
      <div className="w-[80%] bg-white p-8 rounded-xl">
        <h2 className="text-3xl font-semibold py-4 border-b-2 border-[#d3d3d3]">
          Войти в систему
        </h2>
        <form className="w-full h-full flex flex-col gap-6 py-4">
          <div className="w-full flex flex-col gap-2">
            <label className="text-xl font-semibold">Имя пользователя</label>
            <input type="text" onChange={(e) => inputValue(e.target.value)} value={username} placeholder="Введите имя пользователя" className="text-lg px-3 py-4 border-2 border-[#d3dd3d3] outline-2 outline-blue-400 rounded-lg"/>
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="text-xl font-semibold">Пароль</label>
            <input type="password" onChange={(e)=> passwordValue(e.target.value)} value={password} placeholder="Введите пароль" className="text-lg px-3 py-4 border-2 border-[#d3dd3d3] outline-2 outline-blue-400 rounded-lg"/>
          </div>
          <button onClick={handelLogin} className="p-4 text-xl font-semibold text-white bg-blue-500 rounded-xl">Войти</button>
        </form>
      </div>
    </>
  );
}
