import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { motion, HTMLMotionProps } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import Items from "../content/project-items";
import Navbar from "../Components/Navbar";
import Logo from "../Components/logo";

interface HomeProps extends HTMLMotionProps<"div"> {}

const Home: React.FC<HomeProps> = () => {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [loadingNumber, setLoadingNumber] = useState(0);
  const isFromProjectItem = router.query.fromProjectItem === "true";

  useEffect(() => {
    const intervalId: number = window.setInterval(() => {
      const increment = Math.random() < 0.5 ? 1 : 3;
      setLoadingNumber((prevNumber: number) =>
        Math.min(prevNumber + increment, 100)
      );
    }, 5);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Head>
        <title>Luxtra Design - Designs that speak to you.</title>
      </Head>
      <div className="overflow-hidden">
        <motion.div
          className="w-screen h-screen bg-black overflow-hidden absolute top-0 left-0"
          animate={{ y: "0%" }}
          exit={{ opacity: 1 }}
          initial={{ y: "100%" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          style={{ overflow: "hidden" }}
        >
          <div className="flex flex-col w-full h-full justify-center align-middle items-center">
            <p className="text-white">{loadingNumber}</p>
          </div>
        </motion.div>
        <div className="grid grid-cols-5 h-screen w-[500vw]">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            transition={{ delay: 3 }}
            className="h-screen w-screen relative bg-black"
          >
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <motion.div className="justify-center align-center items-center grid grid-cols-5 h-screen w-screen p-3">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 1 }}
                  className="grid grid-cols-5 col-span-4 row-span-5 w-full h-full"
                >
                  <Navbar />
                  <div className="col-start-5 flex justify-end">
                    <Logo />
                  </div>

                  <div className="hidden md:block flex-col col-start-1 col-span-5 row-start-3 w-full h-full">
                    <div className="grid grid-rows-5">
                      <div className="row-span-1 col-span-1 text-white">
                        <motion.div className="[font-size:_clamp(2em,5vw,10em)] font-light">
                          <p>
                            Design that{" "}
                            <Link href="/contact">
                              <span className="underline decoration-[#71AEB5] cursor-pointer">
                                Speaks
                              </span>
                            </Link>
                          </p>
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-4 row-span-3 w-full">
                        {Items.map((item, index) => (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            key={index}
                            className="col-span-1 h-full w-full gap-1"
                            style={{
                              position: "relative",
                            }}
                          >
                            <Link
                              href={`/project-items/${index}`}
                              className="cursor-pointer"
                            >
                              <motion.div
                                style={{
                                  backgroundImage: `url(${item.img})`,
                                  backgroundSize: "cover",
                                  width: "100%",
                                  aspectRatio: "1/1",
                                  paddingBottom: "100%",
                                  objectFit: "cover",
                                  cursor: "pointer",
                                }}
                              ></motion.div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "-180vw" }}
            animate={{ x: isMobile ? 0 : "-20vw" }}
            transition={{ ease: "easeOut", duration: 3.7, delay: 2.5 }}
            className="h-screen w-[80vw] border border-black relative block"
            style={{
              backgroundImage: Items[0]?.img
                ? `url(${Items[0].img})`
                : undefined,
              backgroundSize: "scale-down",
              backgroundRepeat: "no-repeat",
            }}
          ></motion.div>
          <motion.div
            initial={{ x: "-300vw" }}
            animate={{ x: "100vw" }}
            transition={{ ease: "easeOut", duration: 4.5, delay: 2.5 }}
            className="h-screen w-screen border border-black relative block"
            style={{
              backgroundImage: Items[1]?.img
                ? `url(${Items[1].img})`
                : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></motion.div>
          <motion.div
            initial={{ x: "-400vw" }}
            animate={{ x: "100vw" }}
            transition={{ ease: "easeOut", duration: 5, delay: 2 }}
            className="h-screen w-screen border border-black relative block"
            style={{
              backgroundImage: Items[2]?.img
                ? `url(${Items[2].img})`
                : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></motion.div>
          <motion.div
            initial={{ x: "-500vw" }}
            animate={{ x: "100vw" }}
            transition={{ ease: "easeOut", duration: 6, delay: 1.5 }}
            className="h-screen w-screen border border-black relative block"
            style={{
              backgroundImage: Items[3]?.img
                ? `url(${Items[3].img})`
                : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
