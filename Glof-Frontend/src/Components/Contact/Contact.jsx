import React from "react";
import { MdEmail } from "react-icons/md";

const team = [
  {
    name: "Samrat Ghosh",
    email: "samrat9ghosh2018@gmail.com",
  },
  {
    name: "Sucharita Kumar",
    email: "kumarsucharita16@gmail.com",
  },
];

function Contact() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center px-6 py-16 overflow-hidden text-white">

      {/*  background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-12 right-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-12 left-1/2 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Page Heading */}
      <h1 className="relative text-5xl font-serif font-extrabold mb-2 tracking-wide drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400">
        TEAM CTRL+N
      </h1>
      <h2 className="relative text-2xl font-semibold mb-14 text-center text-cyan-300 drop-shadow">
        Meet Our Developer Team
      </h2>

      {/* Team Grid */}
      <div className="relative grid sm:grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl w-full z-10">
        {team.map((member) => (
          <div
            key={member.email}
            className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl border border-cyan-600 p-8 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Initials Circle with Gradient */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center mb-6 shadow-md text-white text-3xl font-extrabold select-none">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>

            {/* Name */}
            <span className="text-2xl font-semibold mb-3 text-white drop-shadow">
              {member.name}
            </span>

            {/* Email  */}
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-3 text-cyan-300 font-medium hover:text-white transition"
              aria-label={`Email ${member.name}`}
            >
              <MdEmail className="text-3xl" />
              <span className="break-all">{member.email}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
