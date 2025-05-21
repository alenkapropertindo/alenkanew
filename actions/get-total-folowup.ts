import db from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const getFolowup = async () => {
  const freelance = await currentUser();
  const totalFolowup = await db.customer.count({
    where: {
      freelanceId: freelance.id,
      status: "FOLLOWUP",
    },
  });
  return totalFolowup;
};
export const getFolowupAdmin = async () => {
  const totalFolowup = await db.customer.count({
    where: {
      status: "FOLLOWUP",
    },
  });
  return totalFolowup;
};
