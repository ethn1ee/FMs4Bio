"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");

  const links = [
    { name: "home", id: "#home" },
    { name: "about", id: "#about" },
    { name: "details", id: "#details" },
    { name: "people", id: "#people" },
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
    <nav className="fixed top-[60px] right-[60px] z-[1000] flex flex-col gap-[40px] items-end">
      {links.map((link, i) => (
        <Link key={i} href={link.id}>
          <motion.span
            animate={{
              color:
                activeSection === link.id.substring(1) ? "#000000" : "#a0a0a0",
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
