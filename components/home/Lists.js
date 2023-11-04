"use client";
import React from "react";
import {BsCodeSlash} from "react-icons/bs";
import {FaConnectdevelop, FaReact} from "react-icons/fa";
import {SiNextdotjs} from "react-icons/si";
import {motion} from "framer-motion";

const Lists = () => {
  const servicesData = [
    {
      title: "Web Designing",
      desc: "Translating design concepts into functional, interactive websites with clean code and seamless navigation.",
      icon: <FaConnectdevelop />,
      delay : 1
    },
    {
      title: "Custom Web Applications",
      desc: "Building tailored web applications that cater to specific business needs, enhancing efficiency and user engagement.",
      icon: <BsCodeSlash />,
      delay : 1.3
    },
    {
      title: "React.js Development",
      desc: "Crafting tailored web solutions using React.js to create responsive, dynamic, and feature-rich user interfaces that meet clients specific needs.",
      icon: <FaReact />,
      delay : 1.6
    },
    {
      title: "Next.js Development",
      desc: "Leveraging the power of Next.js to build fast, server-rendered, and SEO-friendly web applications, ensuring optimal performance and user experience.",
      icon: <SiNextdotjs />,
      delay : 1.9
    },
  ];
  return (
    <>
      <div class='md:w-2/3'>
        <div class='relative mt-5 text-left'>
          {servicesData.map((currElm) => {
            return (
              <>
                <motion.div
                  initial={{opacity: 0, y: 50}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 1, delay: currElm.delay}}
                  class='flex items-center relative'
                >
                  <div class='border-r-2 list-border absolute h-full left-1 md:left-20 top-2 '>
                    <i class='fas fa-circle -top-1 -ml-4 ps-1 pt-1 absolute text-3xl bg-white rounded-full h-10 w-10 main-heading'>
                      {currElm.icon}
                    </i>
                  </div>
                  <div class='md:ml-28 ml-10'>
                    <div class='font-bold'>{currElm.title}</div>

                    <div class='mb-10 '>{currElm.desc}</div>
                  </div>
                </motion.div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Lists;
