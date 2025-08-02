"use client";
import { Menu, X } from "lucide-react";
import Navbar from "./Navbar";
import SignInUp from "./SignInUp";
import clsx from "clsx";
import LogoSection from "./LogoSection";
type MobileMenuProps = {
  mobileNavIsVisible: boolean;
  setMobileNavIsVisible: (visible: boolean) => void;
};
export default function MobileMenu({
  mobileNavIsVisible,
  setMobileNavIsVisible,
}: MobileMenuProps) {
  return (
    <div className="w-full md:hidden p-2">
      <header className="flex justify-between items-center">
        <LogoSection />
        {mobileNavIsVisible && (
          <X onClick={() => setMobileNavIsVisible(!mobileNavIsVisible)} />
        )}
        {!mobileNavIsVisible && (
          <Menu onClick={() => setMobileNavIsVisible(!mobileNavIsVisible)} />
        )}
      </header>

      <div
        className={clsx("mt-4", {
          hidden: !mobileNavIsVisible,
          block: mobileNavIsVisible,
        })}
      >
        <Navbar
          mobileNavIsVisible={mobileNavIsVisible}
          setMobileNavIsVisible={setMobileNavIsVisible}
        />
        <SignInUp
          mobileNavIsVisible={mobileNavIsVisible}
          setMobileNavIsVisible={setMobileNavIsVisible}
        />
      </div>
    </div>
  );
}
