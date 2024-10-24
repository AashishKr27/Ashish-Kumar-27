"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
    url: "https://github.com/AashishKr27"
  },
  {
    metric: "Contributions",
    value: "100",
    postfix: "+",
    url: "https://github.com/AashishKr27"
  },
  {
    metric: "Problem Solved",
    value: "370",
    postfix: "+",
    url: "https://leetcode.com/AshishKr27"
  },
  {
    metric: "Badges",
    value: "5",
    url: "https://leetcode.com/AshishKr27"
  },
  {
    metric: "Contest Rating",
    value: "1476",
    url: "https://leetcode.com/AshishKr27"
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <Link
              href={achievement.url}
              target="_blank"
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
