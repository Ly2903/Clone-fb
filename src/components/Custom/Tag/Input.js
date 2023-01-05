import React, { forwardRef } from "react";

const Input = (props, ref) => {
  let newClass =
    "py-[14px] px-4 border-[1px] border-border-input rounded-md w-full text-text-input text-[17px] leading-4 focus:outline outline-1 caret-secondary-color outline-secondary-color -outline-offset-2 ";
  if (props.className) {
    newClass += props.className;
  }
  return <input type="text" {...props} className={newClass} ref={ref} />;
};

export default forwardRef(Input);
