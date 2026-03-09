import { assets } from "../assets/assets.ts";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="min-h-screen text-white px-24 py-24 md:px-24 flex flex-col justify-center">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-7xl mx-auto w-full">
        
        {/* Left Column: Info */}
        <div className="space-y-10 mt-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[0.3em] uppercase mb-6">
              Contact
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Whether you have an exciting project in mind or just want to connect, 
              feel free to reach out—I’d love to hear from you!
            </p>
          </div>

          <div className="space-y-8 text-sm tracking-widest uppercase">
            <div>
              <p className="text-gray-500 mb-1 text-[10px]">Address</p>
              <p>Colombo, Sri Lanka</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1 text-[10px]">Phone</p>
              <a href="tel:+94766433312" className="hover:text-gray-400 transition">
                (+94) 76 643 3312
              </a>
            </div>
            <div>
              <p className="text-gray-500 mb-1 text-[10px]">E-mail</p>
              <a href="mailto:piuminirashmika@gmail.com" className="hover:text-gray-400 transition">
                piuminirashmika@gmail.com
              </a>
            </div>
          </div>

          {/* Social Icons - Bottom Left style */}
          <div className="flex gap-5 pt-4">
            <a href="https://github.com/PiuminiRash" target="_blank" rel="noopener noreferrer">
              <img src={assets.github} alt="GitHub" className="w-5 opacity-60 hover:opacity-100 transition" />
            </a>
            <a href="https://www.linkedin.com/in/piumini-rashmika-020b872aa/" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin} alt="LinkedIn" className="w-5 opacity-60 hover:opacity-100 transition" />
            </a>
            <a href="https://www.instagram.com/piumini_rashmika/" target="_blank" rel="noopener noreferrer">
              <img src={assets.instagram} alt="Instagram" className="w-5 opacity-60 hover:opacity-100 transition" />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-14 shadow-[20px_20px_60px_#080808,-20px_-20px_60 px_#1e1e1e] rounded-sm"
        >
          <h2 className="text-2xl font-bold tracking-[0.2em] uppercase mb-12">
            Contact Form
          </h2>
          
          <form className="space-y-10">
            <div className="relative">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="bg-transparent border-b border-gray-700 w-full py-2 text-[10px] tracking-widest focus:outline-none focus:border-white transition"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="bg-transparent border-b border-gray-700 w-full py-2 text-[10px] tracking-widest focus:outline-none focus:border-white transition"
              />
            </div>
            <div className="relative">
              <textarea
                placeholder="MESSAGE"
                className="bg-transparent border-b border-gray-700 w-full py-2 text-[10px] tracking-widest focus:outline-none focus:border-white transition resize-none"
              />
            </div>

            <button
              className="mt-8 bg-[#000000fc] px-10 py-4 text-[10px] tracking-[0.3em] font-bold border border-black hover:bg-yellow-400 hover:text-black transition-all duration-500 shadow-lg"
            >
              SEND MESSAGE
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer Copyright */}
      <div className="mt-20 text-center text-[10px] tracking-widest text-gray-600 uppercase">
        <p>© 2025 RashMika. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Contact;