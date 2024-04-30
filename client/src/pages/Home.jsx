import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { roleState } from "../recoil/atom"
import axiosInstance from "../axiosInstance";
import { toast } from "react-hot-toast"
function Home() {
    const role = useRecoilValue(roleState);
    const [userData, SetUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        profile: "",
    })
    useEffect(() => {
        fetchUser()
    }, [])
    const fetchUser = async () => {
        let res = axiosInstance.get("/users/getUser")
            .then(res => {
                SetUserData({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    profile: res.data.profile
                })
            })
        toast.promise(res, {
            loading: "Loading",
            success: "User Fetched Successfully",
            error: "Error fetching User",
        })
        res = await res
    }
    return (
        <div className="text-3xl h-screen text-white flex bg-black">
            <div className="flex w-1/2 h-1/2 justify-center items-center">
                <div className="rounded-full bg-orange-400 h-56 w-56">
                    <img src={userData.profile} alt="profile" className="rounded-full h-56 w-56" />
                </div>
            </div>
            <div className="w-1/2 h-1/2 flex justify-center items-center">
                <ul>
                    <li>{userData.firstName} {userData.lastName}</li>
                    <li>{userData.email}</li>
                    <li>{role}</li>
                </ul>
            </div>
        </div>
    )
}

export default Home