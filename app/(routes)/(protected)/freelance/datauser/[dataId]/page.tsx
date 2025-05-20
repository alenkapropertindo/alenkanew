import { db } from "@/lib/db";
import { FormData } from "./components/form-data-user";
import { currentUser } from "@/lib/auth";

const FormPage = async ({ params }: { params: { dataId: string } }) => {
  const dataUser = await db.dataUser.findUnique({
    where: {
      id: params.dataId,
    },
  });

 

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <FormData initialData={dataUser} />
      </div>
    </div>
  );
};

export default FormPage;
