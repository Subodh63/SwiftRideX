import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptionLogin from "./pages/CaptinLogin";
import CaptionSignup from "./pages/CaptionSignup";
import Home from "./pages/Home";
import UserProtectWrapper from "./pages/UserProtectWrapper";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/caption-login" element={<CaptionLogin />} />
        <Route path="/caption-signup" element={<CaptionSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
