import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { RoleGate } from "@/app/components/auth/role-gate";
import { AccountRole } from "@/lib/generated/prisma";
const AdminLayout = async ({
  children,
}: {
  children: React.ReactNode;
  params: { accountId: string };
}) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <RoleGate allowedRole={AccountRole.ADMIN}>{children}</RoleGate>
    </SessionProvider>
  );
};

export default AdminLayout;
