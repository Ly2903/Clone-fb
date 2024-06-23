import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../components/Auth/Login/Login";
import LoginValidation from "../components/Auth/Login/LoginValidation";
import Profile from "../pages/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";
import Friends from "../pages/Friends/Friends";
import Suggestions from "../pages/Friends/Suggestions/Suggestions";
import FriendsMain from "../pages/Friends/FriendsMain";
import Requests from "../pages/Friends/Requests/Requests";
import List from "../pages/Friends/List/List";
import NotFound from "../pages/NotFound/NotFound";
const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/loginValidation" element={<LoginValidation />} />
        {/* <Route index path="/" element={<Home />} />
        <Route index path="/profile" element={<Profile />} /> */}
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
          path="/profile"
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        />
        <Route
          path="/friends"
          element={
            <PrivateRoutes>
              <Friends />
            </PrivateRoutes>
          }
        >
          <Route index path="" element={<FriendsMain />} />
          <Route path="requests" element={<Requests />} />
          <Route path="suggestions" element={<Suggestions />} />
          <Route path="list" element={<List />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
