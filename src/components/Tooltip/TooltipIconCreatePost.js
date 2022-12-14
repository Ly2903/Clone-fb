import React from "react";
import ReactTooltip from "react-tooltip";

const TooltipIconCreatePost = () => {
  return (
    <ReactTooltip
      place="top"
      delayHide={200}
      delayShow={200}
      class="none_arrow !bg-gray-300 !text-text-tooltip !text-[13px] !px-3 !py-[6px] !rounded-lg"
      effect="solid"
      offset={{ top: -10 }}
      id="icon-createPost"
      arrowColor="transparent"
    />
  );
};

export default TooltipIconCreatePost;
