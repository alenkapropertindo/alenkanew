import db from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const getTotalKomisiTerbayar = async () => {
  const user = await currentUser();

  const account = await db.account.findUnique({
    where: {
      id: user.id,
    },
    select: {
      payout: true,
    },
  });
  return account?.payout ?? 0;
};
