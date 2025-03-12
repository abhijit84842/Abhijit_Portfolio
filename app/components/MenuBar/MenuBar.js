"use client";
import React, { useState } from "react";
import NavBar from "../NavBar/Nav";
import SideBar from "../SideBar/SideBar";
import { ImMenu } from "react-icons/im";

const MenuBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const ViewSidebar = () => {
    setShowSidebar(true);
  };
  const CloseSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div>
      <div className="fixed lg:hidden">
        <ImMenu size={40} onClick={() => ViewSidebar()}  className="z-40"/>
      </div>

      {showSidebar && <SideBar CloseSidebar={CloseSidebar} />}

      <NavBar />
    </div>
  );
};

export default MenuBar;
