import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const affiliate = await db.affiliate.findUnique({ where: { email } });

    return affiliate;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.dataUser.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};
export const getUserByWhatsup = async (whatsup: string) => {
  try {
    const user = await db.dataUser.findUnique({ where: { whatsup } });

    return user;
  } catch {
    return null;
  }
};
