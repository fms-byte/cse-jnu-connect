import LogoSection from "./LogoSection";
import Navbar from "./Navbar";
import SignInUp from "./SignInUp";

type MobileMenuProps = {
  mobileNavIsVisible: boolean;
  setMobileNavIsVisible: (visible: boolean) => void;
};

export default function DesktopMenu({
  mobileNavIsVisible,
  setMobileNavIsVisible,
}: MobileMenuProps) {
  return (
    <div className="hidden md:flex items-center gap-4 w-full p-2 md:justify-between">
      <LogoSection />
      <Navbar  mobileNavIsVisible={mobileNavIsVisible}
        setMobileNavIsVisible={setMobileNavIsVisible} />
      <SignInUp  mobileNavIsVisible={mobileNavIsVisible}
        setMobileNavIsVisible={setMobileNavIsVisible} />
    </div>
  );
}
