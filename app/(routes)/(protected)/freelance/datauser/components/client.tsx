"use client";

import * as React from "react";
import { DataTable } from "./data-table";

import { columns, DataUserColumn } from "./columns";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

interface DataUserClientProps {
  data: DataUserColumn[];
}

export const DataUserClient: React.FC<DataUserClientProps> = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <Heading
            title={`Data User (${data.length})`}
            description="Kelola data user disini"
          />
          {/* <Button onClick={() => router.push(`/affiliate/tambahdata`)}> */}
          <Button onClick={() => router.push(`/affiliate/datauser/new`)}>
            <Plus className="mr-2 h-4 w-4" /> Tambah Data
          </Button>
        </div>
        <Separator />
        <DataTable searchKey="nama" columns={columns} data={data} />
      </div>
    </>
  );
};
