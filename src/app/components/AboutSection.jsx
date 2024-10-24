"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C/C++</li>
        <li>Java</li>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React Js</li>
        <li>Next Js</li>
        <li>TypeScript</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B Tech in Galgotias College</li>
        <li>12th from Heera Lal Public School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1D11z5kl9FiRgFUL9nD8aPojeymdfQ46f/view?usp=drive_link"
          >
            C++ from SimpliLearn
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1DLuDqVPfgn_wfFyeGFxzxsd1f72vwN0k/view?usp=drive_link"
          >
            JavaScript from SimpliLearn
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1DEbSz-aasU8ihKv6f7yPyDtdJUp2UHZa/view?usp=drive_link"
          >
            HTML from SimpliLearn
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1DBFnC-YjzhAM-Nf7Ew3LJXITYnxLPgMm/view?usp=drive_link"
          >
            CSS from SimpliLearn
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1DGYk4a1ZJQuJFS9UuoPLtbLToJjiMgAs/view?usp=drive_link"
          >
            Java from Wipro
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1J0W7wcsDwUk1YXTNvn4WE2uJYnhKYLLk/view?usp=drive_link"
          >
            Participation Certificate in CodeKaze&apos;24 by Coding Ninjas
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const ref = useRef(false);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <section className="text-white" id="about">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="Ashish"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600 font-bold mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            Hello, I&apos;m Ashish! With 2 years in DSA and Frontend
            Development, I excel in C++, JavaScript, React.js, and ML in Python.
            Passionate about problem-solving, I&apos;m committed to continuous
            learning and delivering impactful results.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
