import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSuggestions } from "../friendsSlice";
import SuggestionsItem from "./SuggestionsItem";
import FriendSuggestionItem from "./SuggestionsItem";

const SuggestionsContent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSuggestions());
  }, []);
  const suggestions = useSelector((state) => state.friends.suggestions);
  return (
    <div className="px-4 scrollbar-width-0 scrollbar">
      <p className="text-primary-text font-medium text-base pb-2">
        Những người bạn có thể biết
      </p>
      <div>
        {suggestions.map((val) => {
          return <SuggestionsItem key={val._id} val={val} />;
        })}
      </div>
    </div>
  );
};

export default SuggestionsContent;
