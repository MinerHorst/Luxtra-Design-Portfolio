import React, { useState } from "react";
import { motion, HTMLMotionProps, useInView } from "framer-motion";
import Navbar from "../Components/Navbar";
import Link from "next/link";
import axios from "axios";
import Logo from "../Components/logo";
import Head from "next/head";

function error() {
  return (
    <>
      <Head>
        <title>Luxtra Design - Error</title>
      </Head>
      <div className="overflow-hidden">
        <motion.div
          animate={{ y: "0%" }}
          exit={{ opacity: 1 }}
          initial={{ y: "100%" }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
          }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <div className="grid grid-cols-5 grid-rows-5 w-screen p-2 px-3 h-screen text-white overflow-hidden bg-black">
            <div className="col-span-5 w-full h-full row-span-1 flex gap-1">
              <div className="grid w-full h-full grid-cols-5 grid-rows-3">
                <div className="flex col-start-1 col-span-1 row-start-1 row-span-3 gap-1 pt-2">
                  <Navbar />
                </div>
                <div className="flex col-start-5 col-span-1 row-span-3 justify-end pt-2">
                  <Logo />
                </div>
              </div>
            </div>

            <div className="col-span-5 row-start-2 row-span-4">
              <div className="grid grid-cols-5 grid-rows-5 h-full w-full">
                <div className="col-span-2 row-span-2">
                  <div className="flex flex-col h-full w-full justify-evenly flex-1">
                    <h1 className="w-full h-full text-left font-light [font-size:_clamp(2em,5vw,10em)]">
                      Whooopsies
                    </h1>
                    <div className="hidden sm:inline w-full h-full text-left">
                      Here at{" "}
                      <span className="text-[#71AEB5] underline">
                        Luxtra Design
                      </span>{" "}
                      we work together to make the best shit out there, but well
                      it seems we aren't perfect... let's just say this is a
                      path we haven't explored!
                    </div>
                  </div>
                </div>
                <div className="col-start-4 col-span-2 row-span-5 border"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default error;
