import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reels from "../Content/ReelTime/Reels/Reels";
import Room from "../Content/ReelTime/Room/Room";
import Stories from "../Content/ReelTime/Story/Stories";
import Home from "../Home/Home";
import Login from "../Auth/Login/Login";
import LoginValidation from "../Auth/Login/LoginValidation";
import Register from "../Auth/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../Profile/Profile";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/loginValidation" element={<LoginValidation />} />
        <Route
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
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
