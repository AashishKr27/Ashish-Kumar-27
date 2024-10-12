"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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
        <li>C++ from SimpliLearn</li>
        <li>JavaScript from SimpliLearn</li>
        <li>HTML from SimpliLearn</li>
        <li>CSS from SimpliLearn</li>
        <li>Java from Wipro</li>
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

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="Ashish" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600 font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hello, I&apos;m Ashish! With 2 years in DSA and Frontend Development, I excel in C++, JavaScript, React.js, and ML in Python. Passionate about problem-solving, I&apos;m committed to continuous learning and delivering impactful results.
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
      </div>
    </section>
  );
};

export default AboutSection;
