import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import axiosInstance from "../../axiosInstance";
import toast from "react-hot-toast";
function Signin() {
    const navigate = useNavigate()
    const [pass, setPass] = useState(true);
    const handlePass = () => {
        setPass(!pass);
    }
    const [signinData, setSigninData] = useState({
        email: "",
        password: "",
    })
    const handleUserInput = (event) => {
        const { name, value } = event.target;
        setSigninData({
            ...signinData,
            [name]: value,
        });
    };
    const handleFormSubmit = async () => {
        let res = axiosInstance.post("/users/signin", signinData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        toast.promise(res, {
            loading: "Loading.....⏳",
            success: "User Created Successfully.....✅",
            error: "Error creating User......🚫",
        })
        res = await res;
        localStorage.setItem("accessToken", res.data.accessToken)
        localStorage.setItem("refreshToken", res.data.refreshToken)
        navigate("/")
    }
    return (
        <div className="flex items-center justify-center h-screen bg-black text-white">
            <form onSubmit={handleFormSubmit} className="flex flex-col justify-center gap-3 rounded-lg p-4 w-96 shadow-[0_0_10px_black]">
                <h1 className="text-center text-2xl font-bold text-white">
                    Signin Page
                </h1>
                {/* input for email */}
                <div className="flex flex-col gap-1">
                    <label className="font-semibold text-white" htmlFor="email">
                        Email
                    </label>
                    <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-2 py-1 border text-white rounded-md"
                        value={signinData.email}
                        onChange={handleUserInput}
                    />
                </div>

                {/* input for password */}
                <div className="flex flex-col gap-1">
                    <label className="font-semibold text-white" htmlFor="password">
                        Password
                    </label>
                    <div className="flex items-center">
                        <input
                            required
                            type={pass ? "password" : "text"}
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            className="bg-transparent px-2 py-1 max-w-[100%] w-96 border text-white rounded-md"
                            value={signinData.password}
                            onChange={handleUserInput}
                        />
                        <div className="-ml-7 cursor-pointer">
                            {pass ? (
                                <ImEye onClick={handlePass} />
                            ) : (
                                <ImEyeBlocked onClick={handlePass} />
                            )}
                        </div>
                    </div>
                </div>
                {/* registration button */}
                <button
                    className="w-full bg-[#0095ff] text-white hover:bg-white hover:text-[#0095ff] rounded-sm py-2 font-semibold text-lg cursor-pointer"
                    type="submit"
                >
                    Login
                </button>

                <p className="text-center">
                    Don&apos;t have an account ?{" "}
                    <Link to={"/signup"} className="link text-[#0095ff] cursor-pointer">
                        Signup
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Signin