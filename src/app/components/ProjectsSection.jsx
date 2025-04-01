"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 0,
    title: "Chess.Com",
    description:
      "Real-Time Multiplayer Chess Game Node Js, Express Js, Chess.Js, Socket.io, EJS, Tailwind CSS",
    image: "/images/projects/chess.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/Chess.com",
    previewUrl: "https://github.com/AashishKr27/Chess.com",
  },
  {
    id: 1,
    title: "LiveDocs",
    description:
      "A clone application of Google Docs using TypeScript, Next Js, React Js, Tailwind CSS",
    image: "/images/projects/livedocs.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/LiveDocs",
    previewUrl: "https://live-docs-psi-nine.vercel.app/sign-in",
  },
  {
    id: 2,
    title: "CarHub",
    description:
      "An application to book or rent a car using TypeScript, Next Js, React Js, Tailwind CSS",
    image: "/images/projects/carhub.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/CarHub",
    previewUrl: "https://drive-it-five.vercel.app/",
  },
  {
    id: 3,
    title: "SnapGram",
    description:
      "Fully functional social media application using React Js, Tailwind CSS",
    image: "/images/projects/snapgram.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/SnapGram",
    previewUrl: "https://github.com/AashishKr27/SnapGram",
  },
  {
    id: 4,
    title: "Apple Webpage",
    description:
      "Designed an animated and attractive webpage for presenting the Apple iPhone 15 Pro",
    image: "/images/projects/appleWeb.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/Apple-Website",
    previewUrl: "https://apple-website-orcin.vercel.app/",
  },
  {
    id: 5,
    title: "Amazon Clone",
    description:
      "Created a clone website of frontend of Amazon using JavaScript, React Js, Tailwind CSS",
    image: "/images/projects/amazonClone.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/Amazon-Clone",
    previewUrl: "https://amazon-clone-beta-topaz.vercel.app/",
  },
  {
    id: 6,
    title: "Spotify Clone",
    description:
      "Designed a clone website of Spotify with preloaded songs using React Js, Vite Js, Tailwind CSS",
    image: "/images/projects/spotifyClone.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/Spotify-Clone",
    previewUrl: "https://spotify-clone-self-psi.vercel.app/",
  },
  {
    id: 7,
    title: "Sonic Hub",
    description:
      "Designed an e-commerce website to sell headphones using JavaScript, React Js, Tailwind CSS",
    image: "/images/projects/sonicHub.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/Spotify-Clone",
    previewUrl: "https://spotify-clone-self-psi.vercel.app/",
  },
  {
    id: 8,
    title: "Brainwave",
    description:
      "Modern UI/UX website, developed using React Js, Vite Js and Tailwind CSS",
    image: "/images/projects/brainwave.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/BrainWave",
    previewUrl: "https://brain-wave-beta.vercel.app/",
  },
  {
    id: 9,
    title: "DevLanding",
    description:
      "reated a simple and attractive landing page using JavaScript, React Js, Vite Js, Tailwind CSS",
    image: "/images/projects/devlanding.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/dev-landing",
    previewUrl: "https://dev-landing-iota.vercel.app/",
  },
  {
    id: 10,
    title: "Geritch",
    description:
      "Created a simple and attractive Restaurant Webpage using JavaScript, React Js, CSS",
    image: "/images/projects/hotel.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/Restaurant-Webpage",
    previewUrl: "https://restaurant-webpage-bice.vercel.app/",
  },
  {
    id: 11,
    title: "Weather App",
    description:
      "Created a real-time weather application using JavaScript, React Js, Tailwind CSS",
    image: "/images/projects/weather.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/react-weather-app",
    previewUrl: "https://react-weather-app-iota-orpin.vercel.app/",
  },
  {
    id: 12,
    title: "Speech To Text",
    description:
      "An application for converting speech into text using JavaScript, React Js, CSS",
    image: "/images/projects/speechToText.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AashishKr27/SPEECH-TO-TEXT-CONVERTOR",
    previewUrl: "https://speech-to-text-convertor-fawn.vercel.app/",
  },
  {
    id: 13,
    title: "Fake News Detection",
    description:
      "Implemented a Machine Learning Model for prediciting Fake News using Python",
    image: "/images/projects/fakeNews.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/AashishKr27/Fake-News-Detection-Using-ML",
    previewUrl: "https://github.com/AashishKr27/Fake-News-Detection-Using-ML",
  },
  {
    id: 14,
    title: "Diabetes Prediction",
    description:
      "Implemented a Machine Learning Model for prediciting Diabetes using Python",
    image: "/images/projects/diabetes.jpg",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/AashishKr27/Diabetes-Prediction-using-ML",
    previewUrl: "https://github.com/AashishKr27/Diabetes-Prediction-using-ML",
  },
  {
    id: 15,
    title: "House Price Prediction",
    description:
      "Implemented a Machine Learning Model for prediciting House Price using Python",
    image: "/images/projects/housePrice.jpg",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/AashishKr27/House-Price-Prediction-using-ML",
    previewUrl:
      "https://github.com/AashishKr27/House-Price-Prediction-using-ML",
  },
  {
    id: 16,
    title: "Loan Status Prediction",
    description:
      "Implemented a Machine Learning Model for prediciting Loan Status using Python",
    image: "/images/projects/loan.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/AashishKr27/Loan-Status-Prediction-Using-ML",
    previewUrl:
      "https://github.com/AashishKr27/Loan-Status-Prediction-Using-ML",
  },
  {
    id: 17,
    title: "Wine Quality Prediction",
    description:
      "Implemented a Machine Learning Model for prediciting Wine Quality using Python",
    image: "/images/projects/wine.jpg",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/AashishKr27/Wine-Quality-Prediction-Using-ML",
    previewUrl:
      "https://github.com/AashishKr27/Wine-Quality-Prediction-Using-ML",
  },
  {
    id: 18,
    title: "Sonar Rock Vs Mine",
    description:
      "Implemented a Machine Learning Model for prediciting Sonar Rock & Mine using Python",
    image: "/images/projects/sonarRock.jpg",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/AashishKr27/Sonar-Rock-vs-Mine-Prediction",
    previewUrl: "https://github.com/AashishKr27/Sonar-Rock-vs-Mine-Prediction",
  },
  {
    id: 19,
    title: "Customer Segmentation",
    description:
      "Implemented a Machine Learning Model for Customer Segmentation using Python",
    image: "/images/projects/segment.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/AashishKr27/Customer-Segmentation-Using-ML",
    previewUrl: "https://github.com/AashishKr27/Customer-Segmentation-Using-ML",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6); // Initial number of visible projects
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setVisibleProjects(6); // Reset to initial projects when tag changes
  };

  const handleSeeMore = () => {
    setVisibleProjects((prev) => prev + 6); // Load 6 more projects on click
  };

  const filteredProjects = projectsData
    .filter((project) => project.tag.includes(tag))
    .slice(0, visibleProjects); // Show only the number of visible projects

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
          name="ML"
          isSelected={tag === "ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3 }}
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
      {visibleProjects < projectsData.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSeeMore}
            className="px-6 py-3 bg-gradient-to-r from-blue-700 to-cyan-400 text-white rounded-lg hover:from-blue-800 hover:to-cyan-300 transition-all duration-300"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
