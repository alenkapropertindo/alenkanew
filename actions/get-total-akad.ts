import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const getAkad = async () => {
  const user = await currentUser();
  const totalAkad = await db.dataUser.count({
    where: {
      affiliateId: user.id,
      status: "AKAD",
    },
  });
  return totalAkad;
};
export const getAkadAdmin = async () => {
  const totalAkad = await db.dataUser.count({
    where: {
      status: "AKAD",
    },
  });
  return totalAkad;
};
