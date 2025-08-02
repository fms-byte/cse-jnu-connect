"use client";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { useState } from "react";

export default function HeaderSection() {
  const [mobileNavIsVisible, setMobileNavIsVisible] = useState<boolean>(false);
  return (
    <div className=" w-full md:h-fit p-2 cursor-pointer shadow-sm bg-white shadow-gray-600 flex items-start justify-between">
      <DesktopMenu  mobileNavIsVisible={mobileNavIsVisible}
        setMobileNavIsVisible={setMobileNavIsVisible} />
      <MobileMenu
        mobileNavIsVisible={mobileNavIsVisible}
        setMobileNavIsVisible={setMobileNavIsVisible}
      />
    </div>
  );
}
