"use client";
import React, { useState } from "react";
import NavBar from "../NavBar/Nav";
import SideBar from "../SideBar/SideBar";
import { RiSidebarUnfoldFill } from "react-icons/ri";

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
      <div className=" mt-1 sm:hidden">
        <RiSidebarUnfoldFill size={30} onClick={() => ViewSidebar()} />
      </div>

      {showSidebar && <SideBar CloseSidebar={CloseSidebar} />}

      <NavBar />
    </div>
  );
};

export default MenuBar;
