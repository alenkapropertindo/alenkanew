import db from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const getAkad = async () => {
  const freelance = await currentUser();
  const totalAkad = await db.customer.count({
    where: {
      freelanceId: freelance.id,
      status: "SUCCESS",
    },
  });
  return totalAkad;
};
export const getAkadAdmin = async () => {
  const totalAkad = await db.customer.count({
    where: {
      status: "SUCCESS",
    },
  });
  return totalAkad;
};
