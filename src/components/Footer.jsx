import React from "react";

function Footer({children}) {
  return (
    <footer className="lg:mt-20 mt-14 text-center">
      <p className="text-sm">{children}</p>
    </footer>
  );
}

export default Footer;
