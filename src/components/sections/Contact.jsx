import React from "react";
import { FaDiscord, FaEnvelope, FaInstagram } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope className="text-3xl text-white" />,
      link: "mailto:filiperamos212@gmail.com",
    },
    {
      icon: <FaInstagram className="text-3xl text-white" />,
      link: "https://instagram.com/filipramos_",
    },
    {
      icon: <FaDiscord className="text-3xl text-white" />,
      link: "https://discord.com/users/Dialexy",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center pt-0 pb-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Contact Me
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contacts.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 rounded-xl border border-white/10 hover:-translate-y-1 transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-2">
                  {item.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
