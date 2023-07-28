"use client";
import React from "react";
import MenuBar from "./MenuBar";
import NavSearchBar from "./NavSearchBar";

function Navbar() {
  return (
    <div>
      <NavSearchBar />
      <MenuBar />
    </div>
  );
}

export default Navbar;
