import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const getTotalData = async () => {
  const user = await currentUser();
  const totalData = await db.dataUser.count({
    where: {
      affiliateId: user.id,
    },
  });

  return totalData;
};
export const getTotalDataAdmin = async () => {
  const totalData = await db.dataUser.count({});

  return totalData;
};
