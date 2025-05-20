"use server";

import * as z from "zod";

import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
// import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
// import { AuthError } from "next-auth";
// import { error } from "console";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Data tidak valid!" };
  }

  const { email, password } = validatedFields.data;

  // try {
    const res =await signIn("credentials", {
      email,
      password,
      redirect:false,
      // redirectTo: DEFAULT_LOGIN_REDIRECT,
      
    });
  // } catch (error) {
    if (res?.error) {
      return {error:res.error || "terjadi kesalahan"}
      // switch (error.type) {
      //   case "CredentialsSignin":
      //     return { error: "Data tidak valid!" };
      //   default:
      //     return { error: "Terjadi kesalahan!" };
      // }
    }
    return {success:"login berhasil"}
    // throw error;
  // }
};
