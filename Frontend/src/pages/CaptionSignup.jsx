import React, { useState } from "react";
import { Link } from "react-router-dom";
import RideSwiftLogo from "../Images/SwiftRideX.png";


const CaptionSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName,setFirstName] =useState("");
  const [lastName , setLastName] =useState("");
  const [userData, setUserData] = useState({});

  const SubmitHandler = (e)=>{
    e.preventDefault()

    setUserData({
      fullName:{
        firstName:firstName,
        lastName:lastName
      },
      email:email,
      password:password
    })
    console.log(userData)
    setEmail("")
    setFirstName("")
    setLastName("")
    setPassword("")
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
    <div>
      {/* Change logo for captain  we change after completion*/}

      <img className="w-50 mb-10" src={RideSwiftLogo} alt="Logo" />
      <form onSubmit={(e) => SubmitHandler(e)}>
        <h3 className="text-xl mb-2">What's our Caption's name</h3>
        <div className="flex gap-4 mb-5">
          <input
            required
            className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value)
            }}
          />
          <input
            required
            className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e)=>{
              setLastName(e.target.value)
            }}
          />
        </div>

        <h3 className="text-xl mb-2">What's our Caption's email</h3>
        <input
          required
          className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text"
          type="email"
          placeholder="email@example.com"
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
        />
        <h3 className="text-xl mb-2">Enter Password</h3>
        <input
          required
          className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
        />
        <button className="bg-[#111] text-white font-semibold w-full mb-3 rounded px-4 py-2 text-lg placeholder:text-base">
          Signup
        </button>
      </form>
      <p className="text-center">
        Already have a account?{" "}
        <Link to="/caption-login" className="text-blue-600">
          Login here
        </Link>
      </p>
    </div>
    <div>
      <p className="text-[10px] leading-tight">
        This site is protected by reCAPTCHA and the <span className="underline"> Google Privacy Policy</span> and <span className="underline">terms of Service apply.</span>
      </p>
    </div>
  </div>
  )
}

export default CaptionSignup