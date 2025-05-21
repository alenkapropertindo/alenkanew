"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./cell-action";

export type DataUserColumn = {
  id: string;
  nama: string;
  whatsup: string;
  email: string;
  status: string;
};

export const columns: ColumnDef<DataUserColumn>[] = [
  {
    accessorKey: "nama",
    header: "Nama",
  },
  {
    accessorKey: "whatsup",
    header: "Whatsup",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
