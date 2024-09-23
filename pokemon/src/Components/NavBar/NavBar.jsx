import React from "react";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="bg-slate-600/50 backdrop-blur-3xl p-2 flex justify-between items-center">
      <div className="">
        <button className="text-white text-xl mx-1">
          <FaHome />
        </button>
      </div>
      <div className="">
        <button className="text-white text-xl mx-1 ">
          <FaUser />
        </button>
        <button className="text-white text-xl mx-1 ">
          <MdFavorite />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
