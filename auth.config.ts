import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { LoginSchema } from "@/schemas";
import { getAccountByEmail } from "@/data/account";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const account = await getAccountByEmail(email);
          if (!account || !account.password) return null;

          const passwordsMatch = await bcrypt.compare(
            password,
            account.password
          );

          if (passwordsMatch) return account;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
