import  db  from "@/lib/db";

export const getAccountByEmail = async (email: string) => {
  try {
    const account = await db.account.findUnique({ where: { email } });

    return account;
  } catch {
    return null;
  }
};

export const getAccountById = async (id: string) => {
  try {
    const account = await db.account.findUnique({ where: { id } });

    return account;
  } catch {
    return null;
  }
};
