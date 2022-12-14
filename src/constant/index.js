import React from "react";
import { useSelector } from "react-redux";

export const getNickname = (user) => {
  return user.lastName + " " + user.firstName;
};

export const classButton =
  "px-3 py-2 hover:bg-gray-100 inline-block rounded-lg font-medium";
