import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center text-white px-6 bg-gradient-to-tr from-black via-slate-900 to-purple-900 min-h-screen pt-[5rem] md:pt-0">
      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-grid-white/[0.1] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 md:px-0">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          Elevate Your AI Experience with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
            AI Nexus
          </span>
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Unlock the power of AI with our cutting-edge SaaS platform, offering
          seamless access to the latest AI tools for automation, analytics, and
          creativity.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <a href="https://cloudinary-saas-five.vercel.app/" target="_blank">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-purple-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-500 transition w-full sm:w-auto"
            >
              Get Started <ArrowRight size={18} />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;