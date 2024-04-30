import { useState } from "react"
import { toast } from "react-hot-toast"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { PasswordInputBox } from "../components/PasswordInputBox"
import { useNavigate } from "react-router-dom"
import { BsPersonCircle } from "react-icons/bs"
import { ImEye, ImEyeBlocked } from "react-icons/im"
import axiosInstance from "../axiosInstance"

export const Signup = () => {
  // const [username, setUsername] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
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
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [profile, setProfile] = useState("");

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const getImage = (event) => {
    event.preventDefault();
    // getting the image
    const uploadedImage = event.target.files[0];
    console.log(uploadedImage);
    // if image exists then getting the url link of it
    if (uploadedImage) {
      // setSignupData({
      //   ...signupData,
      //   profile: uploadedImage
      // });
      setProfile(uploadedImage)
      // console.log(setProfile);
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setImagePreview(this.result);
      });
    }
  };

  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-100 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
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
        <InputBox onChange={handleUserInput} name="firstName" value={signupData.firstName} placeholder="John" label={"First Name"} />
        <InputBox onChange={handleUserInput} name="lastName" value={signupData.lastName} placeholder="vencob" label={"Last Name"} />
        <InputBox onChange={handleUserInput} name="email" value={signupData.email} placeholder="Test@gmail.com" label={"Email"} />

        <div className="flex items-center">
          <PasswordInputBox name="password" type={pass ? "password" : "text"} onChange={handleUserInput} placeholder="........" label={"Password"} value={signupData.password} />
          <div className="-ml-7 cursor-pointer">
            {pass ? (
              <ImEye onClick={handlePass} />
            ) : (
              <ImEyeBlocked onClick={handlePass} />
            )}
          </div>
        </div>
        <div className="flex items-center">
          <PasswordInputBox name="confirmPassword" type={cpass ? "password" : "text"} onChange={handleUserInput} value={signupData.confirmPassword} placeholder="........" label={"Confirm Password"} />
          <div className="-ml-7 cursor-pointer">
            {cpass ? (
              <ImEye onClick={handleCpass} />
            ) : (
              <ImEyeBlocked onClick={handleCpass} />
            )}
          </div>
        </div>
        <div className="pt-4">
          <Button onClick={async () => {
            let response = axiosInstance.post("/users/signup", signupData)
            await toast.promise(response, {
              loading: "Creating the user.....",
              success: "User Signup successfully..!🥳",
              error: "Error creating user..."
            })
            response = await response
            localStorage.setItem("accessToken", response.data.accessToken)
            navigate("/dashboard")
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div >
}