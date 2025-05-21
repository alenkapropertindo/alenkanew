"use client";

import { Home, UserRoundPlus } from "lucide-react";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: Home,
    label: "Home",
    href: "/",
  },
  {
    icon: UserRoundPlus,
    label: "Referal",
    href: "/auth/login",
  },
];

export const SidebarRoutes = () => {
  const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
