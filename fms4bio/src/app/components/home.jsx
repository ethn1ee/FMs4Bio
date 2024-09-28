"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="relative">
      <h1 className="text-[32px] font-extrabold text-center mt-[200px]">
        <span className="block text-neutral-200 mb-4">AAAI 2025</span>
        <span>FOUNDATION MODELS FOR BIOLOGICAL DISCOVERIES</span>
      </h1>
      <div className="w-full flex justify-center gap-2 mt-10">
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
    </section>
  );
};

export default Home;
