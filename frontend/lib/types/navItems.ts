import { CornerDownRight, GraduationCap, LucideIcon } from "lucide-react";

interface navItemInterface {
  title: string;
  url: string;
  icon:LucideIcon
}

type navItemArrInterface = navItemInterface[];

export const navItems: navItemArrInterface = [
  {
    title: "Home",
    url: "/",
    icon:CornerDownRight 
  },
  {
    title: "Alumni",
    url: "/alumni",
    icon:GraduationCap 
  },
];
