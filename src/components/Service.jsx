import React from "react";
import { Video, Image, FileText, ImagePlus, Mic, Newspaper } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI Video Compressor",
    description:
      "Reduce video file sizes without compromising quality using AI-powered compression.",
    icon: <Video size={40} className="text-blue-500" />,
  },
  {
    title: "AI Image Enhancer",
    description:
      "Enhance image quality, remove noise, and upscale resolution using AI algorithms.",
    icon: <Image size={40} className="text-green-500" />,
  },
  {
    title: "AI Text Generation",
    description:
      "Generate human-like text for blogs, ads, and content marketing instantly.",
    icon: <FileText size={40} className="text-yellow-500" />,
  },
  {
    title: "AI Text-to-Image",
    description:
      "Convert text descriptions into high-quality AI-generated images effortlessly.",
    icon: <ImagePlus size={40} className="text-purple-500" />,
  },
  {
    title: "AI Voice Assistance",
    description:
      "Get real-time AI-powered voice assistance for hands-free interactions.",
    icon: <Mic size={40} className="text-red-500" />,
  },
  {
    title: "Real-time AI News",
    description:
      "Stay updated with the latest AI developments through real-time news feeds.",
    icon: <Newspaper size={40} className="text-indigo-500" />,
  },
];

function Services() {
  return (
    <section className="w-full bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 uppercase bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
          Services That Drive Success
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          Explore our AI-powered tools designed to enhance productivity,
          creativity, and efficiency.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center text-center 
                         transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                         border-2 border-transparent hover:border-blue-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Adds delay based on index for staggered effect
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
