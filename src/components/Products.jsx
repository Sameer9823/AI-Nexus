import React from "react";
import first from "../assets/first.png";
import middle from "../assets/middle.png";
import last from "../assets/last.png";
import { motion } from "framer-motion";

export default function AISection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        {/* Section Heading */}
        <motion.h1
          className="text-purple-500 uppercase text-center text-4xl font-bold mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          AI Innovations
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center gap-12 justify-between">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 space-y-5"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            <p className="text-purple-400 uppercase text-sm font-semibold">
              AI POWERED SOLUTIONS
            </p>
            <h2 className="text-4xl font-bold leading-snug">
              Build products with impact <br /> by using AI tools
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Enhance productivity with AI-driven automation, reducing manual
              workload and improving efficiency.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="relative w-[90%] md:w-[80%] lg:w-[80%]">
              <img
                src={first}
                alt="AI tools visualization"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute top-3 left-6 bg-purple-600 w-24 h-1 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-24 justify-between my-12">
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="relative w-[90%] md:w-[80%] lg:w-[80%]">
              <img
                src={middle}
                alt="AI tools visualization"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute top-3 left-6 bg-purple-600 w-24 h-1 rounded-full"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="md:w-1/2 space-y-5"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            <p className="text-purple-400 uppercase text-sm font-semibold">
              AI POWERED SOLUTIONS
            </p>
            <h2 className="text-4xl font-bold leading-snug">
              AI-Powered Automation
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Enhance productivity with AI-driven automation, reducing manual
              workload and improving efficiency.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 justify-between">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 space-y-5"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            <p className="text-purple-400 uppercase text-sm font-semibold">
              AI POWERED SOLUTIONS
            </p>
            <h2 className="text-4xl font-bold leading-snug">
              Predictive Analytics
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Leverage AI to analyze data trends, forecast future outcomes, and
              make data-driven decisions.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="relative w-[90%] md:w-[80%] lg:w-[80%]">
              <img
                src={last}
                alt="AI tools visualization"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute top-3 left-6 bg-purple-600 w-24 h-1 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
