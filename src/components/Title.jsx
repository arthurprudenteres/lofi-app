import React from "react";

function Title({ children }) {
  return (
    <div className="text-center md:mt-20 mt-10 lg:text-6xl text-3xl font-extrabold">
      <h1>{children}</h1>
    </div>
  );
}

export default Title;
