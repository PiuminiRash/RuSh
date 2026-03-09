import { assets } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

import {
  FaJava, FaPython, FaDocker, FaCss3Alt,
  FaHtml5, FaReact, FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss, SiExpress, SiMongodb,
  SiMysql, SiJavascript, SiTypescript, SiReact,
} from "react-icons/si";

export default function About() {

  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  const titles = [
    { top: "Creative", bottom: "Developer." },
    { top: "UI / UX", bottom: "Designer." },
    { top: "Quality", bottom: "Assurance." },
    { top: "Web", bottom: "Developer." },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % titles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React Native", icon: <SiReact /> },
  ];

  return (

    <section className="relative w-full px-12 sm:px-4 md:px-36 lg:px-80 py-40 text-white">

      {/* MAIN CARD */}
      <div className="
        relative
        max-w-7xl
        mx-auto
        rounded-3xl
        border border-white/20
        shadow-2xl
        overflow-hidden
      ">

        <div className="grid lg:grid-cols-2 md:px-4">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative min-h-[600px] sm:min-h-[600px] lg:min-h-full"
          >

            <img
              src={assets.profile}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />

          </motion.div>


          {/* TEXT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="
              relative
              backdrop-blur-xl
              bg-white/10
              p-6 sm:p-8 md:p-10
              flex flex-col justify-center
            "
          >

            <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold text-white/40">
              ABOUT ME
            </h2>


            <div className="mt-6 text-2xl sm:text-2xl md:text-2xl font-bold min-h-[100px]">

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div>{titles[index].top}</div>
                  <div>{titles[index].bottom}</div>
                </motion.div>
              </AnimatePresence>

            </div>


            <p className="mt-6 text-sm sm:text-base text-white/80">
              I am a UI/UX-focused full-stack developer passionate about creating
              intuitive, visually appealing digital experiences.
            </p>


            <button className="
              mt-6
              w-fit
              px-6 py-2
              text-sm
              font-semibold
              border border-yellow-500
              rounded-full
              hover:bg-yellow-500
              hover:text-black
              transition
            ">
              View Projects
            </button>

          </motion.div>

        </div>

      </div>


      {/* SCROLL ICON */}
      <div className="flex justify-center mt-10">
        <button
          type="button"
          className="text-3xl cursor-pointer animate-bounce"
          onClick={scrollToSkills}
          aria-label="Scroll to skills"
        >
          <HiOutlineChevronDoubleDown />
        </button>
      </div>


      {/* SKILLS SECTION */}
      <div id="skills" className="max-w-7xl mx-auto mt-20">

        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          TECHNICAL SKILLS
        </h2>

        <div className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-6
        ">

          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="
                border border-white/20
                rounded-xl
                p-6
                text-center
                backdrop-blur-sm
              "
            >

              <div className="text-3xl text-yellow-400 mb-3 flex justify-center">
                {skill.icon}
              </div>

              <div className="text-sm">{skill.name}</div>

            </motion.div>
          ))}

        </div>

      </div>


      {/* GALLERY */}
      <div className="max-w-7xl mx-auto mt-20">

        <h2 className="text-center text-3xl font-bold mb-8">
          GALLERY
        </h2>

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-4
        ">

          <img src={assets.innovesta1}
            className="w-full h-64 object-cover rounded-xl hover:scale-105 transition" />

          <img src={assets.innovesta2}
            className="w-full h-64 object-cover rounded-xl hover:scale-105 transition" />

          <img src={assets.innovesta3}
            className="w-full h-64 object-cover rounded-xl hover:scale-105 transition" />

        </div>

      </div>

    </section>
  );
}
