import db from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const getTotalData = async () => {
  const freelance = await currentUser();
  const totalData = await db.customer.count({
    where: {
      freelanceId: freelance.id,
    },
  });

  return totalData;
};
export const getTotalDataAdmin = async () => {
  const totalData = await db.customer.count({});

  return totalData;
};
