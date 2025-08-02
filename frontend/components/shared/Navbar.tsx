"use client";
import { navItems } from "@/lib/types/navItems";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MobileMenuProps = {
  mobileNavIsVisible: boolean;
  setMobileNavIsVisible: (visible: boolean) => void;
};

export default function Navbar({
  mobileNavIsVisible,
  setMobileNavIsVisible,
}: MobileMenuProps) {
  const pathName = usePathname();
  return (
    <nav className="flex mt-2 font-normal mb-2 flex-col md:flex-row gap-4 w-full md:w-fit justify-center items-center ">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className={clsx(
            "flex  w-full text-center justify-center items-center gap-1",
            {
              "text-rose-600 text-2xl font-bold": pathName === item.url,
              "text-neutral-600": pathName != item.url,
            }
          )}
          // onClick={(e) => {
          //   e.preventDefault();
          //   setMobileNavIsVisible(false);
          // }}
        >
          <item.icon
            className={clsx("w-8", {
              "text-rose-600": pathName === item.url,
            })}
          />
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
