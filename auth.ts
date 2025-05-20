import NextAuth  from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "@/auth.config";
// import { getUserById } from "@/data/freelance";
import { getAccountById } from "./data/account";
import { db } from "./lib/db";
import { AccountRole } from "@prisma/client";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  // update,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },

  callbacks: {
    // async signIn({ user, account }) {
    //   if (account?.provider !== "credentials") return true;

    //   const existingAccount = await getAccountById(user.id);

    //   return true;
    // },

    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as AccountRole;
      }

      if (session.user) {
        session.user.name = token.name;
        // session.user.email = token.email;
      }

      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getAccountById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountById(
        existingUser.id
      );

      token.isOAuth = !!existingAccount;
      token.name = existingUser.nama;
      token.email = existingUser.email;
      token.role = existingUser.role;

      return token;
    },
  },

  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
