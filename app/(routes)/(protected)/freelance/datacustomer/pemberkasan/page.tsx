import db from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { DataUserColumn } from "../components/columns";
import { DataUserClient } from "../components/client";

const DataUserPage = async () => {
  const user = await currentUser();
  const customers = await db.customer.findMany({
    where: {
      freelanceId: user.id,
      status: "ONPROCESS",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!customers) {
    return { error: "data tidak ditemukan" };
  }

  const data: DataUserColumn[] = customers.map((item) => ({
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
