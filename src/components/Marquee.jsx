import React from "react";
import Marquee from "react-fast-marquee";

function TrustedMarquee() {
  return (
    <section className="w-full bg-black py-8">
    
      <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-center my-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
        Trusted by Global Industry Leaders
      </h2>

      <Marquee
        gradient={true}
        gradientColor={[0, 0, 0]}
        speed={50}
        pauseOnHover={true}
      >
        <div className="flex items-center gap-12">
          {[
            "LoremTech",
            "IpsumCorp",
            "Dolor Systems",
            "SitAI",
            "Amet Robotics",
            "Consectetur Inc",
            "Adipiscing Ltd",
          ].map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-6 py-3 bg-gray-800 rounded-lg shadow-md text-white font-semibold text-lg uppercase hover:scale-105 transition-transform duration-300"
            >
              {company}
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}

export default TrustedMarquee;
