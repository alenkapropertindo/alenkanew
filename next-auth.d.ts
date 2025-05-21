import { AccountRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["waiting"] & {
  role: AccountRole;
  email: String;
  // isTwoFactorEnabled: boolean;
  // isOAuth: boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
