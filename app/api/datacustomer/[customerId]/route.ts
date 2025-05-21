import { NextResponse } from "next/server";

import  db  from "@/lib/db";

export async function DELETE(
  req: Request,
  { params }: { params: { customerId: string } }
) {
  try {
    const hapusDataCustomer = await db.customer.delete({
      where: {
        id: params.customerId,
      },
    });

    return NextResponse.json(hapusDataCustomer);
  } catch (error) {
    console.log("[DATA_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { customerId: string } }
) {
  try {
    const values = await req.json();
    const updateDataUser = await db.customer.update({
      where: {
        id: params.customerId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(updateDataUser);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
