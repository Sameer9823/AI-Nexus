import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is AI Nexus?",
    answer:
      "AI Nexus is an AI-powered SaaS platform offering seamless access to AI tools for automation, analytics, and creativity.",
  },
  {
    question: "How does AI Nexus work?",
    answer:
      "AI Nexus integrates multiple AI-powered tools in one place, helping businesses automate workflows and make data-driven decisions.",
  },
  {
    question: "What features does AI Nexus offer?",
    answer:
      "AI Nexus provides AI automation, analytics, text and image processing, chatbot assistance, and much more.",
  },
  {
    question: "Is my data safe with AI Nexus?",
    answer:
      "Yes, AI Nexus ensures enterprise-grade security with encryption and compliance measures.",
  },
  {
    question: "Who can benefit from using AI Nexus?",
    answer:
      "Startups, businesses, and individuals looking to leverage AI for productivity and automation can benefit.",
  },
  {
    question: "Can I join with my team on AI Nexus?",
    answer:
      "Yes, AI Nexus offers collaborative tools for teams to work efficiently with AI-powered solutions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-400 text-center mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-300 text-center mb-8 text-sm sm:text-base">
          Your quick guide to common inquiries and solutions.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-purple-500 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center text-left p-4 text-base sm:text-lg font-semibold bg-gray-800 hover:bg-purple-600 transition duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{index + 1}. {faq.question}</span>
                {openIndex === index ? (
                  <FaMinus className="text-purple-400" />
                ) : (
                  <FaPlus className="text-purple-400" />
                )}
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 p-4 bg-gray-700 text-gray-300" : "max-h-0 p-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
