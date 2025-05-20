"use client";

import { usePathname } from "next/navigation";


export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isAffiliatePage = pathname?.startsWith("/affiliate");
  const isHomePage = pathname === "/";

  return (
    <>
      <div className="flex gap-x-2 ml-auto"></div>
    </>
  );
};
