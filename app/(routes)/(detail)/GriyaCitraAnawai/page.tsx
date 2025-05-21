"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import Container from "@/components/ui/container";
import Link from "next/link";
import { TbMapSearch } from "react-icons/tb";
import { TiMessageTyping } from "react-icons/ti";
import UnitTerlaris from "@/app/components/UnitTerlaris";

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
                            src="/GRIYA CITRA ANAWAI.jpg"
                            width={100}
                            height={200}
                            alt="Griya Citra Anawai"
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
                            width={200}
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
                      src="/GRIYA CITRA ANAWAI.jpg"
                      width={300}
                      height={300}
                      alt="Griya Citra Anawai"
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
                  GRIYA CITRA ANAWAI
                </h1>
                <hr className="my-1" />
                <div className=" flex items-end justify-between">
                  <p className="text-sm font-semibold  text-gray-900 p-1">
                    DP+Akad
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    Mulai Rp.11Jt
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
                  Perumahan Griya Citra Anawai adalah perumahan yg terletak
                  ditengah kota Kendari, tepatnya berada di jln Anawai dekat dgn
                  kantor lurah Anawai. Selain memiliki fasad yg elegan perumahan
                  ini jg dekat dengan berbagai fasilitas seperti:
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  1. Hanya 11 menit ke kampus Universitas Muhamadiyah Kendari
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  2. Hanya 7 menit ke Pasar panjang
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  3. Hanya 8 menit Ke RSU Hermina
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  4. Hanya 5 menit ke Polres Kota Kendari
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  5. Hanya 14 menit ke Lippo Plaza Kendari
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  6. Dekat dengan kantor Imigrasi dan PLN
                </p>

                <div className="mt-5 flex items-center gap-x-3">
                  <Link
                    className=" w-full text-xs  px-0 justify-center flex font-semibold text-slate-800  border-2 border-slate-800 hover:text-white hover:bg-slate-800 py-2 rounded-md tracking-wider transition "
                    href="https://wa.me/6285242049550?text=Halo, Saya minat perumahan Griya Citra Anawai"
                  >
                    Hubungi Admin
                    <TiMessageTyping className="ml-2 size-4" />
                  </Link>
                  <Link
                    className=" w-full text-xs  px-0 justify-center flex font-semibold text-slate-800  border-2 border-slate-800 hover:text-white hover:bg-slate-800 py-2 rounded-md tracking-wider transition "
                    href="https://maps.app.goo.gl/gRgZ6KWKhLGUY9RJ7?g_st=aw"
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
