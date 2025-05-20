import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { dataId: string } }
) {
  try {
    // const dataUser = await db.dataUser.findUnique({
    //   where: {
    //     id: params.dataId,
    //   },
    // });

    const hapusDataUser = await db.dataUser.delete({
      where: {
        id: params.dataId,
      },
    });

    return NextResponse.json(hapusDataUser);
  } catch (error) {
    console.log("[DATA_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { dataId: string } }
) {
  try {
    const values = await req.json();

    const updateDataUser = await db.dataUser.update({
      where: {
        id: params.dataId,
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
