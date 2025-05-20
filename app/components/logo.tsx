import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      height={130}
      priority={true}
      width={130}
      alt="logo"
      src="/logo1.png"
    />
  );
};
