import React from "react";
import { BsGithub } from "react-icons/bs"

function Header() {
  return (
    <div className="py-6 z-10 text-white text-2xl font-bold flex items-center justify-between">
      <div className="logo">lofi.ipa</div>
      <div className="nav flex items-center gap-4">
        <div className="nav-icon">
          <a target="_blank" href="https://github.com/arthurprudenteres/"><BsGithub className="hover:scale-110 hover:opacity-60 transition-all duration-200" size={24} /></a>
        </div>
      </div>
    </div>
  );
}

export default Header;
