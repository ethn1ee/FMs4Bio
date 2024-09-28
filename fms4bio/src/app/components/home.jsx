"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="relative h-screen">
      <h1 className="absolute bottom-[60px] z-10">
        {"FOUNDATION MODELS FOR BIOLOGICAL DISCOVERIES"
          .split(" ")
          .map((word, i) => (
            <span
              key={i}
              className="block text-[104px] font-[900] leading-[100%]"
            >
              {word}
            </span>
          ))}
      </h1>
      <div className="fixed bottom-[60px] right-[60px] flex flex-col items-end gap-2">
        <Link
          href="https://easychair.org/my/conference?conf=FMs4Bio25"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ opacity: 0.7 }}
            className="px-5 py-3 bg-black text-white rounded-xl text-[18px] font-medium w-fit"
          >
            SUBMIT PAPER
          </motion.div>
        </Link>
        <Link
          href="https://github.com/LLMs4Science-Community"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ opacity: 0.7 }}
            className="px-5 py-3 bg-white text-black rounded-xl text-[18px] font-medium w-fit border border-black"
          >
            ACCEPTED PAPERS
          </motion.div>
        </Link>
      </div>

      <img
        className="absolute top-[140px] right-[500px] md:w-[500px] lg:w-[614px] xl:w-[800px] h-auto"
        src="/blob-0.svg"
        alt=""
      />
      <img
        className="absolute top-[40px] right-[150px] md:w-[500px] lg:w-[614px] xl:w-[800px] h-auto"
        src="/blob-1.svg"
        alt=""
      />
    </section>
  );
};

export default Home;
