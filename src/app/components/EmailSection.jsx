/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { cibInstagram, cibLeetcode, cibGithub, cibLinkedin } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import Link from "next/link";
import gfg from "../../../public/gfg.svg";
import codechef from "../../../public/codechef.svg";

import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials border sm:px-4 rounded-xl w-[100%] flex flex-row md:gap-6 sm:gap-10 gap-4 justify-center items-center">
          <Link
            className="transition-all duration-500 hover:scale-125"
            target="_blank"
            href="https://github.com/AashishKr27"
          >
            <CIcon
              className="invert lg:w-[2.7em] lg:h-[2.7em] w-[1.7em] h-[1.7em] mt-1"
              icon={cibGithub}
            />
          </Link>
          <Link
            className="transition-all duration-500 hover:scale-125"
            target="_blank"
            href="https://leetcode.com/AshishKr27"
          >
            <CIcon
              className="invert lg:w-[2.7em] lg:h-[2.7em] w-[1.7em] h-[1.7em] mt-1"
              icon={cibLeetcode}
            />
          </Link>
          <Link
            className="transition-all duration-500 hover:scale-125"
            target="_blank"
            href="https://www.linkedin.com/in/ashish-kumar-3a692b2b4/"
          >
            <CIcon
              className="invert lg:w-[2.7em] lg:h-[2.7em] w-[1.7em] h-[1.7em] mt-1"
              icon={cibLinkedin}
            />
          </Link>
          <Link
            className="transition-all duration-500 hover:scale-125"
            target="_blank"
            href="https://www.codechef.com/users/ashish_kr_27"
          >
            <Image
              src={codechef}
              className="invert w-[3em] h-[2.7em]"
              alt="Linkedin Icon"
            />
          </Link>
          <Link
            className="transition-all duration-500 hover:scale-125"
            target="_blank"
            href="https://www.instagram.com/kumar_ashish_sa.27//"
          >
            <CIcon
              className="invert lg:w-[2.7em] lg:h-[2.7em] w-[1.7em] h-[1.7em] mt-1"
              icon={cibInstagram}
            />
          </Link>
          <Link
            className="transition-all duration-500 hover:scale-125"
            target="_blank"
            href="https://www.geeksforgeeks.org/user/fiitjeeashishkumar/"
          >
            <Image
              className="invert w-[2em] h-[5em]"
              src={gfg}
              alt="GFG Icon"
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Email :
            </label>
            <div className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5">
              {" "}
              ashishkr27062003@gmail.com
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Phone No :
            </label>
            <div className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5">
              +91-7827449252
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
