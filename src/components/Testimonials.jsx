import React from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophia Reynolds",
    role: "CTO at InnovateX",
    review:
      "AI Nexus has revolutionized our workflow automation! With its advanced AI tools, we’ve saved hours on repetitive tasks and boosted team efficiency significantly.",
    rating: 5,
  },
  {
    name: "David Patterson",
    role: "Data Analyst at InsightCorp",
    review:
      "This platform simplifies AI-powered analytics like never before. We can now make real-time data-driven decisions effortlessly with powerful automation.",
    rating: 4,
  },
  {
    name: "Emily Carter",
    role: "Creative Director at Visionary Designs",
    review:
      "AI Nexus has transformed our content creation process. The AI-driven tools enable us to generate high-quality, engaging designs in minutes!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="w-full py-16 px-6 bg-black text-white text-center">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-12">
        What Our Clients Say
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-900 rounded-2xl shadow-lg flex flex-col items-start space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)" }}
          >
            <Quote size={32} className="text-purple-400" />

            <p className="text-gray-300 text-left text-sm sm:text-base">
              {testimonial.review}
            </p>

            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={
                    i < testimonial.rating ? "text-yellow-400" : "text-gray-600"
                  }
                  fill={i < testimonial.rating ? "currentColor" : "none"}
                />
              ))}
            </div>

            <div className="text-left">
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
