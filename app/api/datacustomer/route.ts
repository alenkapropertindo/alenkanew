import { NextResponse } from "next/server";

import db from "@/lib/db";
import { currentUser } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const account = await currentUser();
    const { nama, email, whatsup } = await req.json();

    if (!account) {
      return new NextResponse("Dibutuhkan Id Akun", { status: 400 });
    }

    const dataCustomer = await db.customer.create({
      data: {
        freelanceId: account.id,
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

// export async function DELETE(
//   req: Request,
//   { params }: { params: { dataId: string } }
// ) {
//   try {
//     const dataCustomer = await db.customer.findUnique({
//       where: {
//         id: params.dataId,
//       },
//     });

//     if (!dataCustomer) {
//       return new NextResponse("Data customer tidak ditemukan", { status: 404 });
//     }

//     const hapusDataCustomer = await db.customer.delete({
//       where: {
//         id: params.dataId,
//       },
//     });

//     return NextResponse.json(hapusDataCustomer);
//   } catch (error) {
//     console.log("[DATA_ID_DELETE]", error);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// }
