import Image from "next/image";
import Link from "next/link";

export default function LogoSection() {
  return (
    <Link href={"/"}>
      <Image
        src="/images/logo.png"
        alt="link error"
        width={25}
        height={25}
        title="CSE JnU Logo"
      ></Image>
    </Link>
  );
}
