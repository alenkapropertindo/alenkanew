"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { TbMapSearch } from "react-icons/tb";

import UnitTerlaris from "@/components/UnitTerlaris";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TiMessageTyping } from "react-icons/ti";

const ProductPage = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 pt-0 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <TabGroup as="div" className="flex flex-col-reverse">
              <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
                <TabList className="grid grid-cols-4 gap-6">
                  <Tab className="relative flex  cursor-pointer items-center justify-center rounded-md bg-white">
                    {({ selected }) => (
                      <div>
                        <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                          <Image
                            className="w-full  h-auto"
                            src="/GRIYA IB HASANAH.jpg"
                            width={100}
                            height={200}
                            alt="Griya IB Hasanah"
                          />
                        </span>
                        <span
                          className={cn(
                            "absolute inset-0 rounded-md ring-2 ring-offset-2",
                            selected ? "ring-black" : "ring-transparent"
                          )}
                        ></span>
                      </div>
                    )}
                  </Tab>
                  <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
                    {({ selected }) => (
                      <div>
                        <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                          <Image
                            className="w-full h-auto"
                            src="/Denah.png"
                            width={300}
                            height={300}
                            alt="Denah"
                          />
                        </span>
                        <span
                          className={cn(
                            "absolute inset-0 rounded-md ring-2 ring-offset-2",
                            selected ? "ring-black" : "ring-transparent"
                          )}
                        ></span>
                      </div>
                    )}
                  </Tab>
                </TabList>
              </div>
              <TabPanels className="aspect-square w-full">
                <TabPanel key="Image">
                  <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden ">
                    <Image
                      className="w-full h-auto"
                      src="/GRIYA IB HASANAH.jpg"
                      width={300}
                      height={300}
                      alt="Griya IB Hasanah"
                    />
                  </div>
                </TabPanel>
                <TabPanel key="IMG">
                  <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden ">
                    <Image
                      className="w-full h-auto"
                      src="/Denah.png"
                      width={300}
                      height={300}
                      alt="Denah"
                    />
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
            <div className="mt-5 px-2 sm:mt-16 sm:px-0 lg:mt-0">
              <div>
                <h1 className="sm:text-2xl font-bold text-gray-900">
                  GRIYA IB HASANAH
                </h1>
                <hr className="my-1" />
                <div className=" flex items-end justify-between">
                  <p className="text-sm font-semibold  text-gray-900 p-1">
                    DP+Akad
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    Mulai Rp16Jt
                  </p>
                </div>
                <hr className="my-1" />
                <div className=" flex items-end justify-between">
                  <p className="text-sm font-semibold  text-gray-900 p-1">
                    Rumah Subsidi
                  </p>
                  <p className="text-sm font-semibold  text-gray-900 p-1">
                    Type 36
                  </p>
                </div>
                <hr className="my-1" />
                <div className=" flex items-end justify-between">
                  <p className="text-sm font-semibold  text-gray-900 p-1">
                    Layout
                  </p>
                  <p className="text-sm  font-semibold text-gray-900 p-1">
                    Zigzag 2 kamar
                  </p>
                </div>
                <hr className="my-1" />
                <div className=" flex items-end justify-between">
                  <p className="text-sm font-semibold text-gray-900 p-1">
                    Listrik
                  </p>
                  <p className="text-sm  font-semibold text-gray-900 p-1">
                    1.300 Watt
                  </p>
                </div>
                <hr className="my-1" />
                <div className=" flex items-end justify-between">
                  <p className="text-sm font-semibold text-gray-900 p-1">Air</p>
                  <p className="text-sm  font-semibold text-gray-900 p-1">
                    Sumur Bor
                  </p>
                </div>
                <hr className="my-1" />
                <p className="text-sm  text-gray-900 p-1">
                  Perumahan Griya IB Hasanah merupakan Perumahan Subsidi yg
                  memiliki vibes rumah komersil, selain karena desain elegan yg
                  tdk pasaran perumahan ini jg terletak di lokasi yg sangat
                  strategis, yaitu di tepi jalan Poros utama 2 jalur
                  THR-Puuwatu, jalan perumahan nya sdh menggunakan paving blok
                  dan lokasinya jg bebas banjir. Adapun keunggulan lain dr
                  perumahan ini yaitu:
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  1. Angsuran ringan cm 1jutaan dan flat sampai lunas
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  2. Dekat dengan batas kota dan terminal Puuwatu, cocok unk
                  karyawan tambang area Konawe dan Konut, ataupun ASN luar kota.
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  3. Dekat dgn RS Antero dan RS Bhayangkara
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  4. Akses Mudah ke Lippo, MTQ dan Pasar Mandonga
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  5. Akses bandara dekat
                </p>

                <div className="mt-5 flex items-center gap-x-3">
                  <Link
                    className=" w-full text-xs  px-0 justify-center flex font-semibold text-slate-800  border-2 border-slate-800 hover:text-white hover:bg-slate-800 py-2 rounded-md tracking-wider transition "
                    href="https://wa.me/6285242049550?text=Halo, Saya minat perumahan Griya IB Hasanah"
                  >
                    Hubungi Admin
                    <TiMessageTyping className="ml-2 size-4" />
                  </Link>
                  <Link
                    className=" w-full text-xs  px-0 justify-center flex font-semibold text-slate-800  border-2 border-slate-800 hover:text-white hover:bg-slate-800 py-2 rounded-md tracking-wider transition "
                    href="https://maps.app.goo.gl/cvGvHjHRX18rxAU16?g_st=aw"
                  >
                    Check Map
                    <TbMapSearch className="ml-2 size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-10" />
          <div>
            <UnitTerlaris />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
