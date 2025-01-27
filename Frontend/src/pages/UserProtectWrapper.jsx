import React, {  useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../Context/UserContext";


const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem('token')
  const  navigate= useNavigate()

  if (!token) {
    navigate("/login")
  }

  return(
   <>
      {children}
   </>
    )
}

export default UserProtectWrapper;
