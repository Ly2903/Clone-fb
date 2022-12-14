import React from "react";
import ReactTooltip from "react-tooltip";

const TooltipIconHeader = () => {
  return (
    <ReactTooltip
      place="bottom"
      delayHide={200}
      delayShow={200}
      arrowColor="transparent"
      class="none_arrow !bg-gray-300 !text-text-tooltip !text-[13px] !px-3 !py-[6px] !rounded-lg"
      effect="solid"
      offset={{ bottom: 1 }}
      id="icon-header"
    />
  );
};

export default TooltipIconHeader;
