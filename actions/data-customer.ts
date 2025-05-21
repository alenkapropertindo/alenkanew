"use server";

import * as z from "zod";

import  db  from "@/lib/db";

import { TambahDataSchema } from "@/schemas";
import { currentUser } from "@/lib/auth";

export const tambahData = async (values: z.infer<typeof TambahDataSchema>) => {
  const validatedFields = TambahDataSchema.safeParse(values);

  const account = await currentUser();

  if (!validatedFields.success) {
    return { error: "Data tidak valid!" };
  }

  const { email, nama, whatsup } = validatedFields.data;
  await db.customer.create({
    data: {
      freelanceId: account.id,
      nama,
      whatsup,
      email,
    },
  });
  return { success: "Akun berhasil dibuat!" };
};
