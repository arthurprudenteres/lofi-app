import React from "react";

function Wrapper({ children, bgColor }) {
  const wrapperStyle = `w-full h-full ${bgColor} backdrop-blur-sm border-b-[1px] z-10 border-white/10 sticky top-0`;
  return <div className={wrapperStyle}>{children}</div>;
}

export default Wrapper;
