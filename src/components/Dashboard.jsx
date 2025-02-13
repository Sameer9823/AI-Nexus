import React from "react";
import img from "../assets/zzzz.png";

function Dashboard() {
  return (
    <section
      className="relative w-full h-[700px] flex flex-col items-center justify-center text-center px-6 text-white"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/027/239/461/non_2x/black-grid-dots-pattern-abstract-background-illustration-free-vector.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Discover the Ultimate AI Toolkit 
        </h2>
        <p className="text-lg  max-w-3xl mx-auto mb-6 bg-gradient-to-r from-green-300 to-blue-500 text-transparent bg-clip-text">
          Our AI SaaS platform provides{" "}
          <span className="font-semibold">multiple AI-powered tools</span> in
          one place, helping businesses automate workflows, enhance
          productivity, and make data-driven decisions effortlessly.
        </p>

        <div className="relative p-[5px] rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 animate-border">
          <div className="bg-black rounded-xl p-6">
            <img
              src={img}
              alt="Product Dashboard"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes borderMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-border {
            background-size: 200% 200%;
            animation: borderMove 6s linear infinite;
          }
        `}
      </style>
    </section>
  );
}

export default Dashboard;
