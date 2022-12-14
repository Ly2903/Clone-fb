import React from "react";

const HoverIcon = (props) => {
  let newClass =
    "flex items-center justify-center rounded-full cursor-pointer hover:bg-bg-hover-img ";
  if (props.className) {
    newClass += props.className;
  }
  let propsParents = { ...props };
  delete propsParents.children;
  delete propsParents.className;
  return (
    <div {...propsParents} className={newClass}>
      {props.children}
    </div>
  );
};

export default HoverIcon;
