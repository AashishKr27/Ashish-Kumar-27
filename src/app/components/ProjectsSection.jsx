"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "LiveDocs",
    description: "A clone application of Google Docs using TypeScript, Next Js, React Js, Tailwind CSS",
    image: "/images/projects/livedocs.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/LiveDocs",
    previewUrl: "https://live-docs-psi-nine.vercel.app/sign-in",
  },
  {
    id: 2,
    title: "CarHub",
    description: "An application to book or rent a car using TypeScript, Next Js, React Js, Tailwind CSS",
    image: "/images/projects/carhub.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/CarHub",
    previewUrl: "https://drive-it-five.vercel.app/",
  },
  {
    id: 3,
    title: "SnapGram",
    description: "Fully functional social media application using React Js, Tailwind CSS",
    image: "/images/projects/snapgram.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/SnapGram",
    previewUrl: "https://github.com/AashishKr27/SnapGram",
  },
  {
    id: 4,
    title: "Apple Webpage",
    description: "Designed an animated and attractive webpage for presenting the Apple iPhone 15 Pro",
    image: "/images/projects/appleWeb.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/AashishKr27/Apple-Website",
    previewUrl: "https://apple-website-orcin.vercel.app/",
  },
  {
    id: 5,
    title: "Amazon Clone",
    description: "Created a clone website of frontend of Amazon using JavaScript, React Js, Tailwind CSS",
    image: "/images/projects/amazonClone.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/Amazon-Clone",
    previewUrl: "https://amazon-clone-beta-topaz.vercel.app/",
  },
  {
    id: 6,
    title: "Spotify Clone",
    description: "Designed a clone website of Spotify with preloaded songs using React Js, Vite Js, Tailwind CSS",
    image: "/images/projects/spotifyClone.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/Spotify-Clone",
    previewUrl: "https://spotify-clone-self-psi.vercel.app/",
  },
  {
    id: 7,
    title: "Brainwave",
    description: "Modern UI/UX website, developed using React Js, Vite Js and Tailwind CSS",
    image: "/images/projects/brainwave.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/BrainWave",
    previewUrl: "https://brain-wave-beta.vercel.app/",
  },
  {
    id: 8,
    title: "DevLanding",
    description: "reated a simple and attractive landing page using JavaScript, React Js, Vite Js, Tailwind CSS",
    image: "/images/projects/devlanding.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/dev-landing",
    previewUrl: "https://dev-landing-iota.vercel.app/",
  },
  {
    id: 9,
    title: "Geritch",
    description: "Created a simple and attractive Restaurant Webpage using JavaScript, React Js, CSS",
    image: "/images/projects/hotel.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/Restaurant-Webpage",
    previewUrl: "https://restaurant-webpage-bice.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-200 mt-4 mb-8 md:mb-12">
        Projects Gallery
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
