import React from "react";

function Container({ children, maxWidth, px, mx }) {
  const containerStyle = `${maxWidth} ${px} ${mx}`;
  return <div className={containerStyle}>{children}</div>;
}

export default Container;
