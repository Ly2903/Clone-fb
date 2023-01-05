import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../components/Auth/Login/Login";
import LoginValidation from "../components/Auth/Login/LoginValidation";
import Profile from "../pages/Profile/Profile";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/loginValidation" element={<LoginValidation />} />
        <Route index path="/" element={<Home />} />
        <Route index path="/profile" element={<Profile />} />
        {/* <Route
          index
          path="/"
          element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          }
        />
        <Route
          index
          path="/profile"
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
