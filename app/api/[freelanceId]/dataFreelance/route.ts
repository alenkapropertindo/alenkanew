import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function POST(
  req: Request,
  { params }: { params: { freelanceId: string } }
) {
  try {
    const { nama, email, whatsup } = await req.json();

    if (!nama) {
      return new NextResponse("Nama wajib diisi", { status: 400 });
    }
    if (!whatsup) {
      return new NextResponse("No Whatsup wajib diisi", { status: 400 });
    }
    if (!email) {
      return new NextResponse("Email wajib diisi", { status: 400 });
    }
    if (!params.freelanceId) {
      return new NextResponse("Dibutuhkan Id Freelance", { status: 400 });
    }

    const dataCustomer = await db.customer.create({
      data: {
        freelanceId: params.freelanceId,
        nama,
        email,
        whatsup,
      },
    });

    return NextResponse.json(dataCustomer);
  } catch (error) {
    console.log("[DATA_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { customerId: string } }
) {
  try {
    // const dataUser = await db.dataUser.findUnique({
    //   where: {
    //     id: params.dataId,
    //   },
    // });

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

    const updateDataCustomer = await db.dataCustomer.update({
      where: {
        id: params.customerId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(updateDataCustomer);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
