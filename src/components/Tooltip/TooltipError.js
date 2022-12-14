import React from "react";
import ReactTooltip from "react-tooltip";

const TooltipError = () => {
  return (
    <ReactTooltip
      place="bottom"
      delayHide={200}
      delayShow={200}
      arrowColor="#be4b49"
      className="!font-medium !leading-4  !bg-errors !text-white !text-[13px] !p-[13px] !rounded-sm !shadow-loginItemHover !border-[1px] !border-[#800101] !max-w-[20%]"
      effect="solid"
    />
  );
};

export default TooltipError;
