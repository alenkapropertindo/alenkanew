"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { FormError } from "../form-error";
import { AccountRole } from "@/lib/generated/prisma";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: AccountRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return <FormError message="Hubungi admin untuk mengakses data" />;
  }

  return <>{children}</>;
};
