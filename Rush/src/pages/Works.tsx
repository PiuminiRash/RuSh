import { motion } from "framer-motion";
import { assets } from "../assets/assets";

export default function Works() {
  const projects = [
    { image: assets.travelLanka, link: "https://github.com/PiuminiRash/Travel-Lanka-Website.git" },
    { image: assets.cropMonitor, link: "https://github.com/PiuminiRash/green-shadow-react.git" },
    { image: assets.figma3, link: "https://www.figma.com/file/xxx" },
    { image: assets.figma4, link: "https://www.figma.com/file/xxx" },
    { image: assets.figma5, link: "https://www.figma.com/file/xxx" },
    { image: assets.figma6, link: "https://www.figma.com/file/xxx" },
  ];

  const portfolio = [
    { image: assets.figma1, link: "https://www.figma.com/design/Y5l2iOJwbmuxraYpINpLbb/Travel-App?m=auto&t=wl8tHveIjlZB5zEZ-6" },
    { image: assets.figma2, link: "https://www.figma.com/design/3IgxAqTLMVRvNBEtEdLGlM/Travel-web--Copy-?m=auto&t=wl8tHveIjlZB5zEZ-6" },
    { image: assets.figma3, link: "https://www.figma.com/design/aOX1eQ5zwX5kX4iPYsTDqy/World-Arrack?m=auto&t=wl8tHveIjlZB5zEZ-6" },
    { image: assets.figma4, link: "https://www.figma.com/design/3yKQpQNxveyn91wMGVpaKf/Saloon-Ishu?m=auto&t=wl8tHveIjlZB5zEZ-6" },
    { image: assets.figma5, link: "https://www.figma.com/design/MvPc2gsyShJoqC2OgdJ0tj/Chat-Application?node-id=0-1&t=awmmTCoOl99FIqAK-1" },
    { image: assets.figma6, link: "https://www.figma.com/design/bhcLa59Fgf86xFcrkixq9B/Shoe-Managemet?t=1Yz0jRxxbLDH834g-1" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-36 text-white">

      {/* ===== Projects ===== */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-widest text-yellow-400 uppercase">Projects</p>
        <h2 className="text-3xl font-bold mt-2">My Project Collection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="rounded-xl overflow-hidden border border-white/10 cursor-pointer"
          >
            <img src={project.image} alt="Project" className="w-full h-full object-cover" />
          </motion.a>
        ))}
      </div>

      {/* ===== Portfolio ===== */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-widest text-yellow-400 uppercase">Portfolio</p>
        <h2 className="text-3xl font-bold mt-2">My Portfolio Collection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
        {portfolio.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="rounded-xl overflow-hidden border border-white/10 cursor-pointer"
          >
            <img src={item.image} alt="Portfolio" className="w-full h-full object-cover" />
          </motion.a>
        ))}
      </div>

      {/* ===== Freelance ===== */}
      <div className="text-center">
        <p className="text-xs tracking-widest text-yellow-400 uppercase">Freelance</p>
        <h2 className="text-3xl font-bold mt-6">Hire Me As A Freelancer</h2>

        <div className="flex flex-col sm:flex-row justify-center gap-12 mt-12">
          
          <a href="https://www.fiverr.com/yourusername" target="_blank">
            <button className="px-6 py-2 text-xs border rounded-full hover:bg-yellow-400 hover:text-black">
              Fiverr
            </button>
          </a>

          <a href="https://www.upwork.com/freelancers/yourid" target="_blank">
            <button className="px-6 py-2 text-xs border rounded-full hover:bg-yellow-400 hover:text-black">
              Upwork
            </button>
          </a>

          <a href="mailto:yourmail@gmail.com">
            <button className="px-6 py-2 text-xs border rounded-full hover:bg-yellow-400 hover:text-black">
              Mail
            </button>
          </a>

        </div>
      </div>

    </div>
  );
}
