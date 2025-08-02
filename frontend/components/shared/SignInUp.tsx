"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type MobileMenuProps = {
  mobileNavIsVisible: boolean;
  setMobileNavIsVisible: (visible: boolean) => void;
};

export default function SignInUp({
  mobileNavIsVisible,
  setMobileNavIsVisible,
}: MobileMenuProps) {
  const pathName = usePathname();
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <Button
        variant="outline"
        className={clsx("cursor-pointer", {
          hidden: pathName === "/auth/login",
        })}
        asChild
        // onClick={()=>setMobileNavIsVisible(false)}
      >
        <Link href="/auth/login">Sign In</Link>
      </Button>
      <Button
        variant="default"
        className={clsx("cursor-pointer", {
          hidden: pathName === "/auth/register",
        })}
        asChild
        // onClick={()=>setMobileNavIsVisible(false)}
      >
        <Link href="/auth/register">Register</Link>
      </Button>
    </div>
  );
}
