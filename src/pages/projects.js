import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";



import project3 from "../../public/images/projects/stone.jpg";
import project4 from "../../public/images/projects/password-generator.jpg";
import project5 from "../../public/images/projects/tic.jpg";
import project6 from "../../public/images/projects/emotion_det.jpg";
import project7 from "../../public/images/projects/razz.jpg";
import project8 from "../../public/images/projects/text.jpg";




const FramerImage = motion(Image);


// const FeaturedProjects = ({ type, title, summary, img, link, github }) => {

//   return (
//     <article className="w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 
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

const Project = ({ title, type, img, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4
    ">

      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]  rounded-[2rem] bg-dark rounded-br-3xl 
      dark:bg-light
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      " />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl
        lg:text-lg md:text-base
        ">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline undeline-offset-2"
        >

          <h2 className="my-2 w-full text-left text-3xl font-bold
          lg:text-2xl 
          ">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark 
        dark:text-light
        xm:text-sm
        ">{summary}</p>

        <div className="w-full mt-2 flex tems-center justify-between">

          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline
            md:text-base
            "
          >Visit
          </Link>

          <Link href={github}
            target="_blank"
            className="w-8
            md:w-6
            ">
            {" "}
            <GithubIcon />
            {" "}
          </Link>
        </div>

      </div>

    </article>
  )
}

const Projects = () => {
  return (
    <>
      <Head>
        <title>Vivek Raj | Projects </title>
        <meta name="description" content="Vivek Raj | Full-Stack Software Engineer" />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!"
            className="mb-16 
            lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 
          xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0
          ">
            {/* <div className="col-span-12">
              <FeaturedProjects

                title="YouTube-Clone"
                img={project2}
                summary="Created a YouTube clone using React, Material-UI, and Rapid API. This is a web application that allows users to search and watch videos from YouTube. I have used React for the frontend, Material-UI for the UI components, and Rapid API for the YouTube data API. I have also implemented features such as pagination, dark mode, and responsive design. This project demonstrates my ability to use modern web technologies and API to create a user-friendly and functional web application."
                link="https://goyoutube.netlify.app/"
                github="https://github.com/anirudhsalaria/YouTube"
                type="Project"
              />
            </div> */}
            
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Emotion detection"
                img={project6}
                summary="Developed an emotion detection system using Convolutional Neural Networks (CNN) to accurately identify and classify human emotions from facial expressions, enhancing real-time applications in security, healthcare, and user experience."
                link="https://github.com/vivekraj9/Emotion-Detection"
                github="https://github.com/vivekraj9/Emotion-Detection"
                type="Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Object Detection"
                img={project4}
                summary="Implemented a robust construction site safety system utilizing YOLOv8, a cutting-edge object detection model. This solution enhances worker safety by accurately detecting and monitoring safety gear such as helmets and vests, ensuring compliance with regulations and minimizing risks in real-time construction environments."
                link="https://github.com/vivekraj9/Safety-Object-Detection"
                github="https://github.com/vivekraj9/Safety-Object-Detection"
                type="Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Tic Tac Toe"
                img={project5}
                summary="Created a classic Tic Tac Toe game featuring intuitive gameplay and interactive design. Play against a friend or AI, with responsive UI elements and strategic depth, providing a fun and engaging experience for all ages."
                link="https://vivekraj9.github.io/tic-tac-toe/"
                github="https://github.com/vivekraj9/tic-tac-toe"
                type="Project"
              />
            </div>
            
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Stone Paper Scissors"
                img={project3}
                summary="Developed an interactive Stone-Paper-Scissors game with a sleek interface and responsive gameplay. Enjoy playing against a computer or another player, experiencing classic strategy and quick decision-making in a modern digital format."
                link="https://vivekraj9.github.io/stone-paper-scissor/"
                github="https://github.com/vivekraj9/stone-paper-scissor"
                type="Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Clone of Razorpay-website"
                img={project7}
                summary="Created a clone of Razorpay using Tailwind CSS, combining sleek design with robust payment functionalities. This project replicates Razorpay's user interface and features, offering a modern, responsive, and customizable payment gateway solution."
                link="https://vr-razorpay.netlify.app/"
                github="https://github.com/vivekraj9/razorpay"
                type="Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Text Utility- Website"
                img={project8}
                summary="Developed a versatile text utility application offering essential functionalities like text formatting, character counting, and text transformation. Enhances productivity by simplifying tasks such as case conversion, encoding, and decoding operations, ensuring efficient handling of textual data."
                link="https://vrtextutil.netlify.app/"
                github="https://github.com/vivekraj9/TextUtils-React"
                type="Project"
              />
            </div>

            {/* <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="AutoBee"
                img={project9}
                summary="Created a Car rental website using NextJs, Typescript, Tailwind css and rapid API. Using this website you 
                can search for different cars, filter them according to your need and see the per day prices for the same."
                link="https://github.com/anirudhsalaria/AutoBee"
                github="https://github.com/anirudhsalaria/AutoBee"
                type="Project"
              />
            </div>

            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="TopHire Website- Clone"
                img={project10}
                summary="Created the clone of TopHire Website - a leading company in recruitment using NextJs and Tailwind CSS, Tried to make the Website entirely simillar to the origonal one."
                link="https://tophire-clone.netlify.app/"
                github="https://github.com/anirudhsalaria/tophire_dashboard"
                type="Project"
              />
            </div>

            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="SayData- Dashboard"
                img={project11}
                summary="Created the Dashboard for SayData. I have used ReactJs for the frontend and Tailwind CSS for the UI Framework."
                link="https://dashboard-saydata.netlify.app/"
                github="https://github.com/anirudhsalaria/SayData"
                type="Project"
              />
            </div>

            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Speak"
                img={project12}
                summary="Created a website using which people can convert there voice into text. I have used react-speech-recognition
                node package for the same"
                link="https://gospeak.netlify.app/"
                github="https://github.com/anirudhsalaria/Speak"
                type="Project"
              />
            </div>

            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="TextGo"
                img={project13}
                summary="This is a web application that allows users to manipulate their text easily and 
                efficiently. I have used React for the frontend and Bootstrap for the UI design. I 
                have also implemented features such as dark mode. "
                link="https://anirudhsalaria.github.io/TextGo/"
                github="https://github.com/anirudhsalaria/TextGo"
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