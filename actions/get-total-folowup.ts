import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const getFolowup = async () => {
  const user = await currentUser();
  const totalFolowup = await db.dataUser.count({
    where: {
      affiliateId: user.id,
      status: "FOLLOWUP",
    },
  });
  return totalFolowup;
};
export const getFolowupAdmin = async () => {
  const totalFolowup = await db.dataUser.count({
    where: {
      status: "FOLLOWUP",
    },
  });
  return totalFolowup;
};
