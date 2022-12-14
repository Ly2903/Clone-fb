import React, { forwardRef } from "react";

const LabelCustom = (props, ref) => {
  let { nameLabel, ...propsParent } = { ...props };
  let newClass =
    "pl-[10px] pr-[28px] border-[1px] h-full inline-block border-border-input rounded-md w-full text-text-input text-[15px] leading-9 ";
  if (props.errors === "true") {
    newClass += "border-red-400 focus:border-border-input";
  }
  return (
    <div className="w-1/3">
      <div className="mx-[6px] relative ">
        <label htmlFor={propsParent.id} className={newClass}>
          {nameLabel}
        </label>
        <input
          name="gender"
          type="radio"
          className="absolute right-[10px] h-full"
          ref={ref}
          {...propsParent}
        />
      </div>
    </div>
  );
};

export default forwardRef(LabelCustom);
