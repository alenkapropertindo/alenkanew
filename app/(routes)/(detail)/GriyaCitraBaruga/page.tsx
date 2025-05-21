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
                            src="/GRIYA CITRA BARUGA.jpg"
                            width={100}
                            height={200}
                            alt="Griya Citra Baruga"
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
                      src="/GRIYA CITRA BARUGA.jpg"
                      width={300}
                      height={300}
                      alt="Griya Citra Baruga"
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
                  GRIYA CITRA BARUGA
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
                  Perumahan Griya Citra Baruga ini terletak di tepi jln Poros
                  Nanga-nanga dan Baruga serta merupakan perumahan dengan DP
                  AKAD yg sangat terjangkau dan ramah dikantong, Selain desain
                  fasadnya yg indah dan elegan, lokasi perumahan ini jg bebas
                  banjir dan dekat dengan fasilitas umum sbb:
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  1. Hanya 8 menit dari SMA 5 Kendari
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  2. Hanya 7 menit dari SDN 69 Kendari
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  3. Hanya 11 menit dari brimob dan Pertamina
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  4. Hanya 10 menit dari RSU Aliyah 3
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  5. Hanya 11 menit dari RSUD Bahtermas
                </p>
                <p className="text-sm  text-gray-900 p-1">
                  6. Hanya 14 menit dari pasar Baruga
                </p>

                <div className="mt-5 flex items-center gap-x-3">
                  <Link
                    className=" w-full text-xs  px-0 justify-center flex font-semibold text-slate-800  border-2 border-slate-800 hover:text-white hover:bg-slate-800 py-2 rounded-md tracking-wider transition "
                    href="https://wa.me/6285242049550?text=Halo, Saya minat perumahan Griya Citra Baruga"
                  >
                    Hubungi Admin
                    <TiMessageTyping className="ml-2 size-4" />
                  </Link>
                  <Link
                    className=" w-full text-xs  px-0 justify-center flex font-semibold text-slate-800  border-2 border-slate-800 hover:text-white hover:bg-slate-800 py-2 rounded-md tracking-wider transition "
                    href="https://maps.app.goo.gl/TFbGFbC6SD8Zd5JWA"
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
