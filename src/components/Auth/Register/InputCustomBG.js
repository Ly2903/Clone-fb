import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef } from "react";

const InputCustomBG = (props, ref) => {
  let newClass =
    "py-[14px] px-4 border-[1px] border-border-input rounded-md w-full text-text-input leading-4 h-10 text-[15px] bg-[#f5f6f7] ";
  if (props.errors === "true") {
    newClass += "border-red-400 focus:border-border-input";
  }
  return (
    <>
      <input type="text" {...props} className={newClass} ref={ref} />
      {props.errors === "true" && (
        <>
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className="absolute right-[11px] top-[11px] text-md text-errors "
          />
        </>
      )}
    </>
  );
};

export default forwardRef(InputCustomBG);
