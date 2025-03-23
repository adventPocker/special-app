"use client";
import Navbar from "@/app/components/GlobalELements/Navbar";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SectionsC1 = () => {
  return (
    <>
      <main className=" h-[100vh] w-full  min-w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }} 
          className="min-h-[100vh] w-full h-full  absolute top-0 "
        >
          <Image
            src="/Image/banner-2.jpg"
            alt="no image"
            loading="eager"
            className="object-cover min-h-[100vh] w-[100vw] h-full "
            width={1000}
            height={1000}
          />
        </motion.div>
        <div className="items-center w-full flex flex-col px-5 max-md:px-5 h-[100vh] relative">
          <div className="w-full max-w-[1204px] max-md:max-w-full max-md:my-10 ">
            <Navbar />
          </div>
        </div>
      </main>
    </>
  );
};

export default SectionsC1;
