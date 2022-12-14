import React from "react";
import AddFriends from "./AddFriends/AddFriends";
import Contact from "./Contact/Contact";

const RecentEvents = () => {
  return (
    <div className="w-[360px] scrollbar-width-2 scrollbar text-primary-text scrollbar-thumb-neutral-500 scrollbar-track-neutral-800">
      <AddFriends />
      <Contact />
    </div>
  );
};

export default RecentEvents;
