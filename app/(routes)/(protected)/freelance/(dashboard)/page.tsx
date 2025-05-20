import { CreditCard, DollarSign, Database } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTotalData } from "@/actions/get-total-data";
import { getPemberkasan } from "@/actions/get-total-pemberkasan";
import { getFolowup } from "@/actions/get-total-folowup";
import { getAkad } from "@/actions/get-total-akad";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { Overview } from "@/app/components/overview";
import { getGraphDataAdmin } from "@/actions/get-graph-data";

const DashboardPage = async () => {
  const totalData = await getTotalData();
  const totalFolowup = await getFolowup();
  const totalPemberkasan = await getPemberkasan();
  const totalAkad = await getAkad();
  const graphData = await getGraphDataAdmin();

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Dashboard" description="Progress pencapaian" />
        <Separator />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Komisi
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <Badge className=" bg-green-500">
                <div className="lg:text-xl text-lg font-bold">
                  Rp. 20.000.000
                </div>
              </Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Belum Terbayar
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <Badge className=" bg-orange-500">
                <div className="lg:text-xl text-lg font-bold">
                  Rp. 10.000.000
                </div>
              </Badge>
            </CardContent>
          </Card>
          <Link href={"/affiliate/datauser/akad"}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Jumlah Akad
                </CardTitle>
                <Database className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalAkad}</div>
              </CardContent>
            </Card>
          </Link>
          <Link href={"/affiliate/datauser"}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Jumlah Data
                </CardTitle>
                <Database className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalData}</div>
              </CardContent>
            </Card>
          </Link>
          <Link href={"/affiliate/datauser/pemberkasan"}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Proses Pemberkasan
                </CardTitle>
                <Database className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalPemberkasan}</div>
              </CardContent>
            </Card>
          </Link>
          <Link href={"/affiliate/datauser/folowup"}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Proses Folowup
                </CardTitle>
                <Database className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalFolowup}</div>
              </CardContent>
            </Card>
          </Link>
        </div>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Data Terkumpul</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview data={graphData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
