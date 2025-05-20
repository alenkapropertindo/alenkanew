import { db } from "@/lib/db";
import { DataUserColumn } from "../components/columns";
import { DataUserClient } from "../components/client";
import { currentUser } from "@/lib/auth";

const DataUserPage = async () => {
  const user = await currentUser();
  const datausers = await db.dataUser.findMany({
    where: {
      affiliateId: user.id,
      status: "AKAD",
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const datausersadmin = await db.dataUser.findMany({
    where: {
      status: "AKAD",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!datausers) {
    return { error: "data tidak ditemukan" };
  }

  const data: DataUserColumn[] = datausersadmin.map((item) => ({
    id: item.id,
    nama: item.nama,
    whatsup: item.whatsup,
    email: item.email,
    status: item.status,
    affiliate: item.status,
  }));
  const data2: DataUserColumn[] = datausers.map((item) => ({
    id: item.id,
    nama: item.nama,
    whatsup: item.whatsup,
    email: item.email,
    status: item.status,
    affiliate: item.status,
  }));

  return (
    <div className=" flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        {user.role === "ADMIN" && <DataUserClient data={data} />}
        {user.role === "AFFILIATE" && <DataUserClient data={data2} />}
      </div>
    </div>
  );
};

export default DataUserPage;
