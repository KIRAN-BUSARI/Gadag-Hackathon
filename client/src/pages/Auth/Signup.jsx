import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { BsPersonCircle } from "react-icons/bs";
import axiosInstance from '../../axiosInstance';
import toast from 'react-hot-toast';
function Signup() {
    const navigate = useNavigate();

    const [previewImage, setImagePreview] = useState("");

    const [pass, setPass] = useState(true);

    const handlePass = () => {
        setPass(!pass);
    }

    const [cpass, setCpass] = useState(true);

    const handleCpass = () => {
        setCpass(!cpass);
    }

    // const [signupData, setSignupData] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //     profile: "",
    // });

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profile, setProfile] = useState("");

    // const handleUserInput = (event) => {
    //     const { name, value } = event.target;
    //     // console.log(name, value);
    //     setSignupData({
    //         ...signupData,
    //         [name]: value,
    //     });
    // };

    const getImage = (event) => {
        event.preventDefault();
        // getting the image
        const uploadedImage = event.target.files[0];
        // console.log(uploadedImage);
        // if image exists then getting the url link of it
        if (uploadedImage) {
            setProfile({
                profile: uploadedImage,
            });
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setImagePreview(this.result);
            });
        }
    };

    const handleFormSubmit = async () => {
        let res = axiosInstance.post("/users/signup", {
            firstName, lastName, email, password, confirmPassword, profile
        });
        toast.promise(res, {
            loading: "Loading.....⏳",
            success: "User Created Successfully.....✅",
            error: "Error creating User......🚫",
        })
        res = await res;
        localStorage.setItem("accessToken", res.data.accessToken)
        localStorage.setItem("refreshToken", res.data.refreshToken)
        navigate("/");
    }
    return (
        <div className="flex items-center justify-center h-screen bg-black text-white">
            <form onSubmit={handleFormSubmit} className="flex flex-col justify-center gap-3 rounded-lg p-4 w-96 shadow-[0_0_10px_black]">
                <h1 className="text-center text-2xl font-bold text-white">
                    Registration Page
                </h1>

                {/* input for image file */}
                <label className="cursor-pointer" htmlFor="image_uploads">
                    {previewImage ? (
                        <img
                            className="w-24 h-24 rounded-full m-auto text-transparent"
                            src={previewImage}
                            alt="preview_image"
                        />
                    ) : (
                        <BsPersonCircle className="w-28 h-28 rounded-full m-auto" />
                    )}
                </label>
                <input
                    onChange={getImage}
                    className="hidden"
                    type="file"
                    id="image_uploads"
                    name="image_uploads"
                    accept=".jpg, .jpeg, .png"
                />

                {/* input for First Name */}
                <div className="flex flex-col gap-1">
                    <label className="font-semibold text-white" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        required
                        type="name"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter your name"
                        className="bg-transparent px-2 py-1 border text-white"
                        // value={signupData.firstName}
                        value={firstName}
                        // onChange={handleUserInput}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                {/* Input for Last Name */}
                <div className="flex flex-col gap-1">
                    <label className="font-semibold text-white" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        required
                        type="name"
                        name="lastName"
                        id="lastName"
                        placeholder="Enter your name"
                        className="bg-transparent px-2 py-1 border text-white"
                        // value={signupData.lastName}
                        // onChange={handleUserInput}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

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
                        className="bg-transparent px-2 py-1 border text-white"
                        // value={signupData.email}
                        // onChange={handleUserInput}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                            className="bg-transparent px-2 py-1 max-w-[100%] w-96 border text-white"
                            // value={signupData.password}
                            // onChange={handleUserInput}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                {/* Input for Confirm Password */}
                <div className="flex flex-col gap-1">
                    <label
                        className="font-semibold text-white"
                        htmlFor="confirmPassword"
                    >
                        Confirm Password
                    </label>
                    <div className="flex items-center">
                        <input
                            required
                            type={cpass ? "password" : "text"}
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm your password"
                            className="bg-transparent px-2 py-1 max-w-[100%] w-96 border text-white"
                            // value={signupData.confirmPassword}
                            // onChange={handleUserInput}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <div className="-ml-7 cursor-pointer">
                            {cpass ? (
                                <ImEye onClick={handleCpass} />
                            ) : (
                                <ImEyeBlocked onClick={handleCpass} />
                            )}
                        </div>
                    </div>
                </div>

                {/* registration button */}
                <button
                    className="w-full bg-[#0095ff] hover:bg-white hover:text-[#0095ff] transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
                    type="submit"
                >
                    Create Account
                </button>

                <p className="text-center">
                    Already have an account ?{" "}
                    <Link to={"/signin"} className="link text-[#0095ff] cursor-pointer">
                        Signin
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Signup