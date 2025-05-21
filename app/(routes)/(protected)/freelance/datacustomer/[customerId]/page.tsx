import db from "@/lib/db";
import { FormData } from "./components/form-data-user";

const FormPage = async ({ params }: { params: { customerId: string } }) => {
  const datacustomer = await db.customer.findUnique({
    where: {
      id: params.customerId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <FormData initialData={datacustomer} />
      </div>
    </div>
  );
};

export default FormPage;
