import { useEffect, useState } from "react"
import axiosInstance from "../axiosInstance.js"
import { Link } from "react-router-dom"
export const Appbar = () => {
    const [firstName, setFirstName] = useState("")
    const [img, setimg] = useState("")
    useEffect(() => {
        axiosInstance.get("/users/getUser")
            .then(res => {
                // console.log(res.data.data.firstName);
                setFirstName(res.data.data.firstName)
                setimg(res.data.data.profile)
            })
    }, [])
    return <div className="shadow h-14 flex bg-black justify-between">
        <div className="flex flex-col font-bold justify-center h-full ml-4 text-[#0095ff]">
            <Link to={"/"}>Gadag Hackathon</Link >
        </div>
        <div className="flex">
            <div className="flex flex-col text-white justify-center h-full mr-3">
                Hello
            </div>
            <div className="mr-3 uppercase underline flex items-center text-[#0095ff]">
                {firstName}
                <img src={img} alt="profle" height={"42vh"} width={"42vh"} />
            </div>
        </div>
    </div>
}