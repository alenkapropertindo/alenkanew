"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";


import { RegisterSchema } from "@/schemas";
import { getAccountByEmail } from "@/data/account";
import db from "@/lib/db";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Data tidak valid!" };
  }

  const { email, password, nama, whatsup } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getAccountByEmail(email);

  if (existingUser) {
    return { error: "Email sudah digunakan!" };
  }

  // await db.account.create({
  //   data: {
  //     nama,
  //     whatsup,
  //     email,
  //     password: hashedPassword,
  //   },
  // });

  return { success:validatedFields.data };
};
