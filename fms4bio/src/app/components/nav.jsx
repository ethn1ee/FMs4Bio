"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");

  const links = [
    { type: "section", name: "about", href: "#about" },
    { type: "section", name: "details", href: "#details" },
    { type: "section", name: "people", href: "#people" },
    {
      type: "site",
      name: "AAAI 2024",
      href: "https://llms4science-community.github.io/aaai2024.html",
    },
  ];

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.7,
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed w-screen h-[100px] z-[1000] flex justify-end gap-[40px] px-[80px] items-center bg-white">
      {links.map((link, i) => (
        <Link key={i} href={link.href}>
          <motion.span
            animate={{
              color:
                link.type === "section" && activeSection === link.href.substring(1) ? "#000000" : "#a0a0a0",
            }}
            className="font-semibold"
          >
            {link.name.toUpperCase()}
          </motion.span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
