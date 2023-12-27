import axios from "axios";
import PopUp from "../components/common/PopUp";

const BASE_URL = "https://dummyjson.com/auth/login"

export const authHandler = (userData) => {
    console.log(userData)
    const {username, password} = userData
    axios.post(BASE_URL, {
            username, //kminchelle
            password    // 0lelplR
    })
    .then((res)=> {
        console.log(res)
        localStorage.setItem("userData", JSON.stringify(res.data))
        window.location.href = "/"
    })
    .catch((err)=> {
        console.log(err)
    })
}