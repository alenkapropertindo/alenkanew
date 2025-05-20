import { db } from "@/lib/db";

export const getFreelanceByEmail = async (email: string) => {
  try {
    const freelance = await db.freelance.findUnique({ where: { email } });

    return freelance;
  } catch {
    return null;
  }
};

export const getFreelanceById = async (id: string) => {
  try {
    const freelance = await db.freelance.findUnique({ where: { id } });

    return freelance;
  } catch {
    return null;
  }
};
