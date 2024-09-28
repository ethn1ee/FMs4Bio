"use client";

import Link from "next/link";

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
      <div className="fixed bottom-[60px] right-[60px]">
        <Link
          className="px-5 py-3 bg-white text-black rounded-xl text-[18px] font-medium"
          href="https://github.com/LLMs4Science-Community"
          target="_blank"
          rel="noopener noreferrer"
        >
          ACCEPTED PAPERS
        </Link>
        <Link
          className="px-5 py-3 bg-black text-white rounded-xl text-[18px] font-medium"
          href="https://easychair.org/my/conference?conf=FMs4Bio25"
          target="_blank"
          rel="noopener noreferrer"
        >
          SUBMIT PAPER
        </Link>
      </div>

      <img
        className="absolute top-[140px] right-[500px] w-[614px] h-auto"
        src="/blob-0.svg"
        alt=""
      />
      <img
        className="absolute top-[40px] right-[150px] w-[614px] h-auto"
        src="/blob-1.svg"
        alt=""
      />
    </section>
  );
};

export default Home;
