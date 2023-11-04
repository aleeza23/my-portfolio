"use client";
import Navbar from "@/components/home/Navbar";
import PageTransition from "@/components/home/PageTransition";
import Image from "next/image";
import React, {useState} from "react";
import {AiFillGithub} from "react-icons/ai";
import {motion} from "framer-motion";
import {BiLinkExternal} from "react-icons/bi";
import Link from "next/link";
import AppModal from "@/components/home/AppModal";
// import { useRouter } from "next/router";
const Project = () => {
  //  const router = useRouter()
  const [modal, setmodal] = useState(false);
  const [currentProject, setcurrentProject] = useState({});

  const projects = [
    {
      title: "Ticketing System",
      repoLink: "https://github.com/aleeza23/ticketing-system",
      liveLink: "",
      imgSrc: "/dashboard-project-2.jpg",
      delay: 0.6,
      link: "",
      skills: [
        "jsx",
        "css",
        "bootstrap",
        "react js",
        "ant design",
        "custom hooks",
        "context API",
      ],
      desc: `Developed a comprehensive ticketing system using React powered by
      Context API and custom hooks. The system is designed to streamline
      the reporting and resolution of problems faced by clients.
      Implemented a user-centric approach, allowing clients, agents, and
      managers to have their distinct user profiles, ensuring secure and
      personalized access. Clients can seamlessly create tickets to report
      issues and problems they encounter. Agents can take ownership of
      tickets, offering specialized assistance in resolving client issues.
      Implemented role-based access control to ensure that clients,
      agents, and managers have access to functionalities appropriate to
      their roles. Clients can create tickets, agents can resolve and
      reply, and managers can supervise and manage escalations.`,
    },
    {
      title: "Restuarant Website",
      repoLink: "https://github.com/aleeza23/restaurant-web",
      liveLink: "https://alizaaa.netlify.app/",
      imgSrc: "/restu.png",
      delay: 0.8,
      link: "",
      skills: ["jsx", "css", "tailwind css", "react js"],
      desc: `Designed and developed a visually appealing restaurant website using React and Tailwind CSS. 
      Leveraged the power of Tailwind CSS, a utility-first CSS framework, to efficiently style the website. 
      Implemented an interactive menu section that showcases the restaurant's offerings. 
      Included image galleries to highlight the restaurant's ambiance, signature dishes, and staff, creating an immersive experience for visitors. 
      Provided essential contact information, including the restaurant's address, phone number, and email, making it easy for customers to reach out or locate the restaurant. 
      `,
    },
    {
      title: "Arch Move",
      imgSrc: "/new arch.png",
      repoLink: "https://github.com/aleeza23/react-landingPage",
      liveLink: "https://restaurant-website-adq9.vercel.app/",
      delay: 0.9,
      link: "",
      skills: ["react js", "css", "bootstrap"],
      desc: `Developed a dynamic and visually appealing landing page that serves as an online showcase for different architecture designs. It's built using React, a popular JavaScript library, and Bootstrap, a frontend framework known for its responsive and stylish design components. The landing page presents a collection of architectural designs for users to explore.
      The landing page is designed to be fully responsive, ensuring an optimal viewing experience on various devices, from desktops to mobiles. Each architecture design is represented as a card or section on the landing page. The project aims to provide an engaging and informative user experience, allowing visitors to explore and appreciate different architectural designs.
      `,
    },
  ];
  return (
    <>
      <PageTransition />
      <div className='container xl:max-w-5xl mx-auto h-max-content xl:h-screen flex flex-col justify-center align-middle  px-5 xl:px-0 xl:py-0 py-28 text-white'>
        <div className='grid xl:grid-cols-2 gap-4 '>
          <div className='flex flex-col justify-center text-center xl:text-start align-middle'>
            <h1 className='text-3xl  font-bold  '>
              My <span className='main-heading mr-2'>Work</span>
            </h1>
            <p className='mt-2 xl:max-w-lg constant-text'>
              Explore my portfolio to witness the art of seamless user
              interfaces, responsive designs, and the latest trends in web
              development. Lets transform your digital aspirations into reality
              one line of code at a time.
            </p>
            <a
              href='https://drive.google.com/file/d/11eXYRuQ9YeHSup-BuL2J0-ZxUHKjPLyL/view?pli=1'
              download='AleezaRubabCV.pdf'
            >
              <button className='bg-white  main-heading mt-5 block mx-auto xl:mx-0 mb-9 xl:mb-0  font-bold rounded px-4 py-2'>
                More coming soon
              </button>
            </a>
          </div>

          {projects.map((currElm) => {
            return (
              <>
                <motion.div
                  initial={{opacity: 0, scale: 0}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 1, delay: currElm.delay}}
                  onClick={() => {
                    setmodal(true);
                    setcurrentProject(currElm);
                    // console.log(currentProject[0].skills)
                  }}
                 
                  className='xl:px-8 xl:py-6 px-5 py-5 rounded border mb-5 xl:mb-0 cursor-pointer relative project-group overflow-hidden'
                >
                  <Image
                    className='shadow rounded md:w-full md:h-60 object-cover mx-auto project-card'
                    width={"500"}
                    height={"500"}
                    src={currElm.imgSrc}
                    alt='no'
                  
                  />

                  <div  onClick={() => setmodal(false)} className='text text-white h-0  text-2xl absolute bottom-0 left-0 hover-bg   w-full flex  align-bottom '>
                    <Link
                   
                      href={currElm.repoLink}
                      className='fa-brands ms-5 mb-5 mt-auto  w-10 border py-2 px-2 duration-500 h-10 rounded-full   bg-white main-heading hover:scale-90 hover:bg-white'
                    >
                      <AiFillGithub />
                    </Link>
                    <Link
                      href={currElm.liveLink}
                      className='fa-brands ms-2 mb-5 mt-auto  w-10 border py-2 px-2 duration-500 h-10 rounded-full   bg-white main-heading hover:scale-90 hover:bg-white'
                    >
                      <BiLinkExternal />
                    </Link>
                  </div>
                </motion.div>
              </>
            );
          })}
        </div>
      </div>

      {/* modal */}
      <AppModal
        title={"Project"}
        setmodal={setmodal}
        modal={modal}
        footer={null}
        width={800}
      >
        <Image
          className='shadow rounded w-screen h-60 mx-auto project-card'
          width={"500"}
          height={"500"}
          src={currentProject.imgSrc}
          alt='no'
        />
        {currentProject?.skills?.map((currElm) => {
          return (
            <>
              <button className='  main-heading font-bold rounded-full px-4 skills ms-2 mt-2'>
                {currElm}
              </button>
            </>
          );
        })}

        <div className='border-l-2 md:ms-4 mt-7 border-black h-max-content '>
          <h1 className=' font-bold text-3xl ms-4 mb-3'>
            {currentProject.title}
          </h1>
          <p className=' ms-4 text-justify mb-3 constant-text '>
            {currentProject.desc}
          </p>
          <div className=' text-2xl   w-full flex   '>
            <Link
              href={currentProject.repoLink}
              className='fa-brands ms-5 mb-5 mt-auto modal-btn  w-10 border shadow-xl py-2 px-2 duration-500 h-10 rounded-full   bg-white main-heading hover:scale-90 hover:bg-white'
            >
              <AiFillGithub />
            </Link>
            <Link
              href={currentProject.liveLink}
              className='fa-brands ms-2 mb-5 mt-auto modal-btn  w-10 border shadow-xl py-2 px-2 duration-500 h-10 rounded-full   bg-white main-heading hover:scale-90 hover:bg-white'
            >
              <BiLinkExternal />
            </Link>
          </div>
        </div>
      </AppModal>

      {/* navbar for desktop */}
      <div className='hidden px-5 py-4 xl:flex flex-col gap-8 text-2xl justify-between  items-center nav-bg  nav-desktop  h-max  rounded-full'>
        <Navbar />
      </div>

      {/* navbar for mobile */}
      <div className=' px-5 py-3 flex xl:hidden gap-8 text-3xl  mobile-nav-bg justify-between fixed bottom-0  items-center  w-screen h-max  '>
        <Navbar from='mobile-nav' />
      </div>
    </>
  );
};

export default Project;
