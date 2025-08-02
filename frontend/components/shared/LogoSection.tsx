import Image from "next/image";

export default function LogoSection() {
  return (
    <div>
      <Image
        src="/images/logo.png"
        alt="link error"
        width={25}
        height={25}
        title="CSE JnU Logo"
      ></Image>
    </div>
  );
}
