import React, { forwardRef } from "react";

const HoverImg = (props, ref) => {
  const { src, className, children } = props;
  let newClass = "group relative cursor-pointer ";
  if (className) {
    newClass += className;
  }
  let propsParent = { ...props };
  delete propsParent.children;
  delete propsParent.className;
  delete propsParent.src;
  return (
    <div className={newClass} {...propsParent} ref={ref}>
      <img
        src={src}
        alt="Ảnh đại diện"
        className="rounded-full w-full h-full"
      />
      <div className="absolute h-full w-full top-0 rounded-full group-hover:bg-bg-hover-img"></div>
      {children}
    </div>
  );
};

export default forwardRef(HoverImg);
