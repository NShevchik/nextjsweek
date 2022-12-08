import React, { useEffect } from "react";
import { WhiteCircle_m } from "../WhiteCircle/WhiteCircle_m";
import { HiMenu } from "react-icons/hi";

export const LeftSideNavbar = () => {
  let menu: Element | null;
  useEffect(() => {
    menu = document.querySelector('.menu')
  }, [])

  function openMenu() {
    menu?.classList.toggle('translate-x-[-100%]')
  }

  return (
    <WhiteCircle_m icon={<HiMenu />} callback={openMenu} />
  )
};


