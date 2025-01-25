import React, { useState } from "react";
import { Link } from "react-router-dom";
import RideSwiftLogo from "../Images/SwiftRideX.png";

const CaptinLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captionData, setCaptionData] = useState({});

  const SubmitHandler = (e) => {
    e.preventDefault();
    setCaptionData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        
        {/* Change logo for captain  we change after completion*/}


        <img className="w-50 mb-10" src={RideSwiftLogo} alt="Logo" />
        <form onSubmit={SubmitHandler}>
          <h3 className="text-xl mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-xl mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button
            type="submit"
            className="bg-[#111] text-white font-semibold w-full mb-3 rounded px-4 py-2 text-lg placeholder:text-base"
          >
            Login
          </button>
        </form>
        <p className="text-center">
          Join a SwiftRideX?{" "} 
          <Link to="/caption-signup" className="text-blue-600">
             Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] flex items-center justify-center text-white font-semibold w-full mb-1 rounded px-4 py-2 text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptinLogin;
