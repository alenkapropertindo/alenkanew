import db from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const getPemberkasan = async () => {
  const user = await currentUser();
  const totalPemberkasan = await db.customer.count({
    where: {
      freelanceId: user.id,
      status: "ONPROCESS",
    },
  });
  return totalPemberkasan;
};
