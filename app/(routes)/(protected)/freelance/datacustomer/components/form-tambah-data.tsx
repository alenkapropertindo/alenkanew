"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ChevronLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { tambahData } from "@/actions/data-customer";
import { TambahDataSchema } from "@/schemas";
import { FormError } from "@/app/components/form-error";
import { FormSuccess } from "@/app/components/form-success";

export const FormTambahData = () => {
  const router = useRouter();

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof TambahDataSchema>>({
    resolver: zodResolver(TambahDataSchema),
    defaultValues: {
      nama: "",
      email: "",
      whatsup: "",
    },
  });

  const onSubmit = (values: z.infer<typeof TambahDataSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      tambahData(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
        router.push(`/freelance/datacustomer`);
        router.refresh();
      });
    });
  };

  // const onSubmit = async (data: DataFormValues) => {
  //   try {
  //     setLoading(true);
  //     if (initialData) {
  //       await axios.patch(`/api/datauser/${params.dataId}`, data);
  //     } else {
  //       await axios.post(`/api/datauser`, data);
  //     }

  //     router.push(`/affiliate/datauser`);
  //     router.refresh();
  //     toast.success(toastMessage);
  //   } catch (error: any) {
  //     toast.error("Terjadi kesalahan!");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const onDelete = async () => {
  //   try {
  //     setLoading(true);
  //     await axios.delete(
  //       `/api/${params.affiliateId}/datauser/${params.dataId}`
  //     );
  //     router.refresh();
  //     toast.success("Data berhasil dihapus");
  //   } catch (error: any) {
  //     toast.error("Terjadi kesalahan");
  //   } finally {
  //     setLoading(false);
  //     setOpen(false);
  //   }
  // };

  return (
    <>
      {/* <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      /> */}

      <div className="flex items-center justify-between">
        <Heading title="Tambah Data" description="Form tambah data" />
      </div>
      <Separator />
      <Button onClick={() => router.push(`/freelance/datacustomer`)}>
        <ChevronLeftCircle className="h-4 w-4 mr-2" /> Kembali
      </Button>
      <div className=" max-w-xl bg-slate-100 mt-4 mx-auto flex md:items-center md:justify-center h-full p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input disabled={isPending} placeholder="nama" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whatsup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Whatsup</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="no whatsup"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="email"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button type="submit" className="ml-auto mr-4">
              Tambahkan
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};
