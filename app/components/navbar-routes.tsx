"use client";

import { usePathname } from "next/navigation";
import { UserButton } from "./auth/user-button";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isFreelancePage = pathname?.startsWith("/freelance");
  // const isHomePage = pathname === "/";

  return (
    <>
      <div className="flex gap-x-2 ml-auto">
        {isFreelancePage ? <UserButton /> : null}
      </div>
    </>
  );
};
