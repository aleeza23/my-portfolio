"use client"
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {BsFacebook} from "react-icons/bs";
import {motion} from "framer-motion";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import TypeWriter from "./TypeWrite";
import TypeWrite from "./TypeWrite";

const LeftSection = () => {
  return (
    <>
      <div className=' text-center flex flex-col justify-center  xl:text-left'>
        <motion.h1
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1 , delay : 0.8}}
          className='text-3xl md:text-5xl  mb-5 font-bold  text-white '
        >
          Hi! &#x1F44B; , <br />
          I am Aleeza <br />
          <span className='main-heading'>Front-End Developer</span>
        </motion.h1>
         <TypeWrite />

        <p className='text-white xl:max-w-lg '>
          With a profound love for turning ideas into captivating digital
          experiences, I relish the ever-evolving world of web development. This
          dynamic realm fuels my passion, inspiring me to create innovative
          solutions that leave a lasting impact.
        </p>

        <span className='inline-flex text-2xl text-white mt-3 mx-auto xl:mx-0 '>
          <Link href={'https://github.com/aleeza23'} className='fa-brands mr-2  w-10 border py-2 px-2 duration-500 h-10 rounded-full icon-hover hover:scale-90  hover:bg-white'>
            <AiFillGithub />
          </Link>
          <Link href={'https://www.linkedin.com/in/aleezarubab/'} className='fa-brands mr-2  w-10 border py-2 px-2 duration-500 h-10 rounded-full icon-hover hover:scale-90 hover:bg-white'>
            <FaLinkedinIn />
          </Link>
          <Link href={'mailto:rubaab.dev@gmail.com'} className='fa-brands mr-2  w-10 border py-2 px-2 duration-500 h-10 rounded-full icon-hover hover:scale-90 hover:bg-white'>
            <MdEmail />
          </Link>
          <Link href={'tel:03115917071'} className='fa-brands  w-10 border py-2 px-2 duration-500 h-10 rounded-full icon-hover hover:scale-90 hover:bg-white'>
            <IoLogoWhatsapp />
          </Link>
        </span>
      </div>
    </>
  );
};

export default LeftSection;
