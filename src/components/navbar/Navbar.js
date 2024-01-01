import React from "react";

function Navbar() {
  return (
    <div className="flex fixed justify-between p-5 shadow w-full decoration-transparent bg-[#d4ccb1]  pt-7">
      <div>
        <h2 className="font-extrabold text-[25px]">Skeema</h2>
      </div>
      <div className=" ">
        <button className="bg-white text-black rounded-full p-4  font-semibold border-slate-900 leading-normal ">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Navbar;
