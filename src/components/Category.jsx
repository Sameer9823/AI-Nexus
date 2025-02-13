import React from "react";
import { Sparkles, MessageCircle, Puzzle, Globe } from "lucide-react";
import { motion } from "framer-motion";

function Features() {
  return (
    <section className="w-full py-16 px-6 bg-black text-white text-center">
      <h1 className="inline-block px-4 py-1 mb-4 text-4xl font-semibold bg-gray-800 bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text rounded-full">
        Features
      </h1>

      {/* Title */}
      <h2 className="text-4xl font-bold">Discover Our Full Suite of AI Nexus</h2>
      <p className="text-gray-400 mt-2">The next-level AI tools you need</p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
        {/* Feature 1 */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4 rounded-full bg-purple-500/20">
            <Sparkles size={28} className="text-purple-400" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold">Prompt Collection</h3>
            <p className="text-gray-400">
              Spark creativity with a vast collection of prompts designed to ignite your imagination.
            </p>
          </div>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4 rounded-full bg-purple-500/20">
            <Puzzle size={28} className="text-purple-400" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold">Flexible Outputs</h3>
            <p className="text-gray-400">
              Customize outputs by adjusting parameters, providing feedback, and refining the content.
            </p>
          </div>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4 rounded-full bg-purple-500/20">
            <MessageCircle size={28} className="text-purple-400" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold">Instant Response</h3>
            <p className="text-gray-400">
              Get real-time suggestions to keep the conversation going smoothly.
            </p>
          </div>
        </motion.div>

        {/* Feature 4 */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4 rounded-full bg-purple-500/20">
            <Globe size={28} className="text-purple-400" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold">Browser Extension</h3>
            <p className="text-gray-400">
              Manage conversations, summarize web pages, and engage with PDFs effortlessly.
            </p>
          </div>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
         <a href="http://localhost:3000/" target="_blank">
        <button className="flex items-center gap-2 bg-purple-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-500 transition">
         
          Get Started →
        </button>
         </a>
      </motion.div>
    </section>
  );
}

export default Features;
