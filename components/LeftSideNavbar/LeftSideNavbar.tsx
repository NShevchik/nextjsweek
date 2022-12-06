import React from "react";
import { WhiteCircle_m } from "../WhiteCircle/WhiteCircle_m";
import { HiMenu } from "react-icons/hi";
import { useMenuOpen } from "../../store/store";

export const LeftSideNavbar = () => {
  const changeMenu = useMenuOpen((state) => state.changeMenu)
  return (
    <WhiteCircle_m icon={<HiMenu />} callback={changeMenu} />
  )
};


