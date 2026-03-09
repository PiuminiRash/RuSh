import { assets } from "../assets/assets.ts";
import { motion } from "framer-motion";

function Home() {
    return (
        <section
            className="
                relative
                min-h-screen
                flex
                items-center
                justify-center
                text-white
                px-20 sm:px-32 md:px-32 lg:px-24 xl:px-40
                py-16 sm:py-32 md:py-24 lg:py-32
            "
        >

            {/* Content Container */}
            <div className="
                relative
                flex
                flex-col
                items-center
                justify-center
                text-center
                max-w-4xl
                w-full
            ">

                {/* Name Section */}
                <div className="space-y-3">

                    <motion.h2
                        className="
                            text-xl
                            sm:text-2xl
                            md:text-3xl
                            lg:text-4xl
                            xl:text-5xl
                            font-bold
                        "
                        initial={{ opacity: 0, y: -80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                    >
                        HELLO !
                    </motion.h2>

                    <motion.h2
                        className="
                            text-xl
                            sm:text-2xl
                            md:text-3xl
                            lg:text-4xl
                            xl:text-5xl
                            font-bold
                        "
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                    >
                        I'M{" "}
                        <span className="text-yellow-500">
                            PIUMINI RASHMIKA
                        </span>
                    </motion.h2>

                </div>


                {/* Intro */}
                <p className="
                    mt-6 sm:mt-8 md:mt-10
                    text-sm sm:text-base md:text-lg lg:text-xl
                    text-gray-300
                    leading-relaxed
                ">
                    Driven by a strong passion for UI/UX design and full-stack development,
                    I focus on creating intuitive, visually appealing interfaces backed by
                    robust, scalable systems.
                </p>


                {/* Social Links */}
                <div className="
                    flex
                    gap-5 sm:gap-6 md:gap-8
                    mt-6 sm:mt-8 md:mt-10
                ">
                    <a href="https://github.com/PiuminiRash" target="_blank">
                        <img src={assets.github} className="w-6 sm:w-5 md:w-6 hover:scale-110 transition"/>
                    </a>

                    <a href="https://linkedin.com" target="_blank">
                        <img src={assets.linkedin} className="w-6 sm:w-5 md:w-6 hover:scale-110 transition"/>
                    </a>

                    <a href="https://instagram.com" target="_blank">
                        <img src={assets.instagram} className="w-6 sm:w-5 md:w-6 hover:scale-110 transition"/>
                    </a>
                </div>


                {/* Arrow positioned relative to container */}
                <div className="
                    relative
                    mt-8 sm:mt-10 md:mt-12
                ">
                    <a href="/about">
                        <img
                            src={assets.arrow}
                            className="w-8 sm:w-5 md:w-6 hover:translate-y-1 transition"
                        />
                    </a>
                </div>

            </div>

        </section>
    );
}

export default Home;