import { DataUserColumn } from "./components/columns";
import { DataUserClient } from "./components/client";
import  db from "@/lib/db";
import { currentUser } from "@/lib/auth";

const DataUserPage = async () => {
  const account = await currentUser();
  const datacustomers = await db.customer.findMany({
    where: {
      freelanceId: account.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!datacustomers) {
    return { error: "data tidak ditemukan" };
  }

  const data: DataUserColumn[] = datacustomers.map((item) => ({
    id: item.id,
    nama: item.nama,
    whatsup: item.whatsup,
    email: item.email,
    status: item.status,
  }));

  return (
    <div className=" flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <DataUserClient data={data} />
      </div>
    </div>
  );
};

export default DataUserPage;
