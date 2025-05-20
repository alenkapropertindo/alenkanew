"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";


import { RegisterSchema } from "@/schemas";
import { getAccountByEmail } from "@/data/account";
import db from "@/lib/db";
// import {db} from "@/lib/db";

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

  await db.account.create({
    data: {
      nama:nama,
      whatsup:whatsup,
      email:email,
      password: hashedPassword,
      type:"email",
      provider:"email",
      providerAccountId:uuidv4()
    },
  });

  return { success:"berhasil" };
};
