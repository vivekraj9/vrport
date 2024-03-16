import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";

import TransitionEffect from "@/components/TransitionEffect";


import project2 from "../../public/images/projects/hactoberfest.png";

import project6 from "../../public/images/projects/codechef.png";
import project7 from "../../public/images/projects/IYMC.png";




const FramerImage = motion(Image);


// const FeaturedProjects = ({ type, title, summary, img, link, github }) => {

//   return (
//     <article className="w-1/2 flex items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 
//     dark:bg-dark dark:border-light
//     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
//     ">

//       <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]  rounded-[2.5rem] bg-dark rounded-br-3xl 
//       dark:bg-light
//       xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
//       " />

//       <Link
//         href={link}
//         target="_blank"
//         className="w-1/2 cursor-pointer overflow-hidden rounded-lg 
//         lg:w-full"
//       >
//         <FramerImage src={img} alt={title} className="w-full h-auto"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.2 }}
//           priority
//           sizes='(max-width: 768px) 100vw, 
//           (max-width:1200px) 50vw,
//           50vw'
//         />
//       </Link>

//       <div className="w-1/2 flex flex-col items-start justify-between pl-6 
//       lg:w-full lg:pl-0 lg:pt-6
//       ">
//         <span className="text-primary font-medium text-xl dark:text-primaryDark 
//         xs:text-base
//         ">
//           {type}</span>
//         <Link href={link} target="_blank"
//           className="hover:underline undeline-offset-2"
//         >
//           <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light 
//           sm:text-sm
//           ">
//             {title}</h2>
//         </Link>
//         <p className="my-2 font-medium text-dark 
//         dark:text-light
//         xm:text-sm
//         ">{summary}</p>
//         <div className="mt-2 flex tems-center">
//           <Link href={github} target="_blank" className="w-10"> <GithubIcon /> </Link>
//           <Link href={link} target="_blank"
//             className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
//             dark:bg-light dark:text-dark
//             sm:px-4 sm:text-base
//             "
//           >Visit Project</Link>
//         </div>
//       </div>

//     </article>
//   )
// }

const Project = ({ title, type, img, github, summary }) => {
  return (
    <article className="w-3/4 flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4
    ">

      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]  rounded-[2rem] bg-dark rounded-br-3xl 
      dark:bg-light
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      " />

      {/* <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      > */}
        <FramerImage src={img} alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        />
      {/* </Link> */}

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl
        lg:text-lg md:text-base
        ">{type}</span>
        {/* <Link
          href={link}
          target="_blank"
          className="hover:underline hover:scale-110 undeline-offset-2"
        > */}

          <h2 className="my-2 w-full text-left text-3xl font-bold 
          lg:text-2xl 
          ">{title}</h2>
        {/* </Link> */}
        <p className="my-2 font-medium text-dark 
        dark:text-light
        xm:text-sm
        ">{summary}</p>

        <div className="w-full mt-2 flex tems-center justify-between">

          {/* <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline
            md:text-base
            "
          >Visit
          </Link> */}

          {/* <Link href={github}
            target="_blank"
            className="w-8
            md:w-6
            ">
            {" "}
            <GithubIcon />
            {" "}
          </Link> */}
        </div>

      </div>

    </article>
  )
}

const Projects = () => {
  return (
    <>
      {/* <Head>
        <title>Vivek Raj | Projects Page</title>
        <meta name="description" content="Vivek Raj | Full-Stack Software Engineer" />
      </Head> */}

      <TransitionEffect />

      <main className="w-full mb-16 mt-20 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Achievements"
            className="mb-16 
            lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

            <div className="grid grid-cols-12 gap-24 gap-y-32
            xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0
            justify-center items-center">
              {/* <div className="col-span-12">
              <FeaturedProjects

                title="YouTube-Clone"
                img={project2}
                summary="Created a YouTube clone using React, Material-UI, and Rapid API. This is a web application that allows users to search and watch videos from YouTube. I have used React for the frontend, Material-UI for the UI components, and Rapid API for the YouTube data API. I have also implemented features such as pagination, dark mode, and responsive design. This project demonstrates my ability to use modern web technologies and API to create a user-friendly and functional web application."
                link="https://goyoutube.netlify.app/"
                github="https://github.com/anirudhsalaria/YouTube"
                type="Featured Project"
              />
            </div> */}
            
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Hactoberfest 2023"
                img={project2}
                summary="In Hacktoberfest 2023, I put my stamp on the tech world by making three contributions in web development. Through these pull requests, I added my touch of creativity to open-source projects. It was like painting with code, making websites come alive. Each contribution was a step toward making the web a more exciting and functional place."
                //link="https://mytravelgo.netlify.app/"
                github="https://github.com/anirudhsalaria/Travel-advisor"
                type="Open Source"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="2 star Codechef"
                img={project6}
                summary="
                Proudly holding a Two-Star Coder rating on CodeChef, I've demonstrated my commitment to problem-solving and algorithmic excellence. This achievement reflects my passion for tackling coding challenges and showcases my proficiency in competitive programming. It's a testament to my dedication to continuous learning and growth in the dynamic field of computer science."
                //link="https://github.com/anirudhsalaria/GoNews"
                github="https://github.com/anirudhsalaria/GoNews"
                type="Competitve Programming"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="IYMC"
                img={project7}
                summary="In the 2023 International Youth Math Challenge (IYMC), I secured the prestigious Silver Honor, showcasing my aptitude for mathematical problem-solving on a global stage. This accomplishment reflects my commitment to excellence in mathematics, and I am motivated to continue pursuing challenges that foster intellectual growth and achievement."
                link="https://onecamone.netlify.app/"
                github="https://github.com/anirudhsalaria/VideoCall"
                type="International Olympiad"
              />
            </div>
            
            {/* <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Chatline"
                img={project3}
                summary="Created an online chatting room where people can come and chat. I have used Firebase for Google authentication, Vite-ReactJS for the frontend, and Tailwind CSS for the UI design. This is a web application that allows users to sign in with their Google account, join chat rooms, and send or receive messages in real-time."
                link="https://wechatline.netlify.app/"
                github="https://github.com/anirudhsalaria/Chatline"
                type="Project"
              />
            </div> */}
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener App"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProjects

                title="Crypto Screener App"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Crypto Screener App"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Crypto Screener App"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Project"
              /> 
             </div> */}

          </div>
        </Layout>
      </main>

    </>
  )
}


export default Projects