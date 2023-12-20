import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Items from "../../content/project-items"; // Update the path to your data file
import React from "react";
import Link from "next/link";
import Navbar from "../../Components/Navbar";
import Logo from "../../Components/logo";
import Head from "next/head";

const ProjectItem = () => {
  const router = useRouter();
  const { index } = router.query;
  const item = Items[parseInt(index as string, 10)];

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Luxtra Design - {item.title}</title>
      </Head>
      <motion.div
        animate={{ y: "0%" }}
        exit={{ opacity: 1 }}
        initial={{ y: "-100%" }}
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
              <div className="flex col-start-3 col-span-1 row-span-1 justify-center">
                <Link href={"/"}>
                  <button className="bg-[#71AEB5] px-3 p-1 rounded-b-md">
                    <p className="font-light text-[12px]">Back</p>
                  </button>
                </Link>
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
                  <div className="w-full h-full text-left font-light [font-size:_clamp(2em,5vw,10em)]">
                    {item.title}
                  </div>
                  <div className="hidden sm:inline w-full h-full text-left">
                    {item.description}
                  </div>
                </div>
              </div>
              <div className="col-start-3 sm:col-start-4 col-span-3 sm:col-span-2 row-start-1 row-span-3 h-full w-full">
                <img
                  src={item.img}
                  alt=""
                  className="object-fit w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="row-start-3">
                <a href="https://google.com" target="_blank">
                  <button className="bg-[#71AEB5] rounded-md p-2">
                    <span>Live Demo</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectItem;