"use client";
import Navbar from "@/components/home/Navbar";
import PageTransition from "@/components/home/PageTransition";
import RightImg from "@/components/home/RightImg";
import Image from "next/image";
import React from "react";
import {AiFillHtml5, AiOutlineAntDesign} from "react-icons/ai";
import {BsBootstrap, BsFillBootstrapFill} from "react-icons/bs";
import {FaCss3, FaReact} from "react-icons/fa";
import {SiNextdotjs, SiTailwindcss} from "react-icons/si";
import {TbBrandJavascript} from "react-icons/tb";
import {RiCss3Line} from "react-icons/ri";
import {motion} from "framer-motion";

const About = () => {
  const skills = [
    {icon: <AiFillHtml5 />},
    {icon: <RiCss3Line />},
    {icon: <TbBrandJavascript />},
    {icon: <FaReact />},
    {icon: <SiNextdotjs />},
    {icon: <AiOutlineAntDesign />},
    {icon: <SiTailwindcss />},
  ];
  return (
    <>

<Image className="absolute hidden md:block right-0 bottom-0 mix-blend-screen " src={"/pattern.jpg"} width={"400"} height={"400"} />

      <PageTransition />
      <div className='container mx-auto mt-20  xl:mt-0  xl:h-screen px-5  h-max-content xl:pe-10 xl:flex xl:flex-col xl:justify-center align-middle  '>
      {/* <h1 className="text-white font-bold text-3xl text-center">My <span className="main-heading">About</span></h1> */}
        <div className='grid xl:grid-cols-3 gap-4 '>
          <motion.div
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 1}}
          >
            <Image
              className='shadow rounded mx-auto  xl:block mt-0 sm:mt-4  sm:mx-auto order-2 xl:order-1'
              width={"600"}
              height={"600"}
              src='/coding 2.png'
              alt='no'
            />
          </motion.div>

          <div className='xl:mt-28 mt-10  xl:col-span-2 xl:order-2  '>
            <h1 className='text-white text-3xl  font-bold mb-4 '>
              Meet <span className='main-heading'>Aleeza Rubab</span>, 🚀
            </h1>
            <p className='text-white  text-justify constant-text'>
              I am
              <span className='main-heading font-bold ms-1'>Aleeza Rubab</span>,
              a passionate frontend developer with a mastery of HTML, CSS,
              JavaScript, and an array of cutting-edge technologies, including
              React, Next.js, Bootstrap, Tailwind CSS, and Ant Design. My
              journey in web development is a symphony of innovation and
              aesthetics. With a keen eye for design and an unwavering
              commitment to user experience, I transform concepts into
              captivating digital experiences. As I navigate the landscape of
              web development, I am also a dedicated student pursuing a Bachelor
              of Science in Software Engineering from Virtual University. This
              dual role allows me to bridge the gap between theory and practice,
              bringing the latest industry insights to every project I
              undertake. I am enthusiastic about taking on new challenges and
              transforming creative visions into functional realities. Whether
              its a personal project, a business website, or an innovative web
              application, I am here to turn your ideas into stunning digital
              experiences.
            </p>
            <h1 className="font-bold mt-5 text-2xl ">S<span className="main-heading">k</span>ills</h1> 
            <span className='inline-flex flex-wrap mb-16 xl:mb-0 text-2xl text-white mt-3 '>            
            {skills.map((currElm) => {
              return <>
              <i className='fa-brands mr-2  w-10 border py-2 px-2 duration-500 h-10 rounded icon-hover hover:scale-90  hover:bg-white'>
            {currElm.icon}
            </i>
              </>
            })}
         
        </span>
            <a
              href='https://drive.google.com/file/d/11eXYRuQ9YeHSup-BuL2J0-ZxUHKjPLyL/view?pli=1'
              download='AleezaRubabCV.pdf'
            >
              <button className='bg-white main-heading mt-5 block  font-bold rounded px-9 py-2'>
                Download CV
              </button>
            </a>
          </div>
        </div>
        {/* skillss section */}
       
        {/* <div className='grid grid-cols-3 sm:gap-10 xl:gap-10  mx-auto xl:grid-cols-6 text-3xl xl:text-9xl mt-5 text-white'>
          {skills.map((currElm, index) => {
            return (
              <>
                <i
                  key={index}
                  className='fa-brands border mb-3 xl:mb-0  text-center ps-6 pt-6 xl:ps-4 xl:pt-4  overflow-hidden w-20 h-20  duration-500 xl:w-40 xl:h-40 rounded-full icon-hover hover:scale-90   hover:bg-white'
                >
                  {currElm.icon}
                </i>
              </>
            );
          })}
        </div> */}
      </div>

      {/* navbar for desktop */}
      <div className='hidden px-5 py-4 xl:flex  flex-col gap-8 text-2xl justify-between  items-center nav-bg  nav-desktop  h-max  rounded-full'>
        <Navbar />
      </div>

      {/* navbar for mobile */}
      <div className=' px-5 py-3 flex  mobile-nav-bg  xl:hidden gap-8 text-3xl justify-between fixed bottom-0  items-center nav-bg w-screen h-max  '>
        <Navbar from='mobile-nav'/>
      </div>

    </>
  );
};

export default About;
