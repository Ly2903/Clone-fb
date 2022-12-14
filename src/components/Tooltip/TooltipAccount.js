import React from "react";
import ReactTooltip from "react-tooltip";

const TooltipAccount = () => {
  return (
    <ReactTooltip
      delayShow={500}
      class="none_arrow test !bg-[#333] !text-white !text-[13px] !py-1 !px-2 !border-[1px] !border-white"
      arrowColor="transparent"
    />
  );
};

export default TooltipAccount;
