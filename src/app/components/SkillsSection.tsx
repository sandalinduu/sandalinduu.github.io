"use client";

import Image from "next/image";

export default function SkillsSection() {
  const skills = [
    { name: "HTML", src: "/skill/html.svg" },
    { name: "CSS", src: "/skill/css.svg" },
    { name: "JavaScript", src: "/skill/js.svg" },
    { name: "Figma", src: "/skill/figma.svg" },
    { name: "Adobe XD", src: "/skill/xd.svg" },
    { name: "TailwindCSS", src: "/skill/Tailwind.svg" },
    { name: "React", src: "/skill/react.svg" },
  ];

  return (
    <section
      id="skills"
      className="w-full py-20 px-8 sm:px-20 text-center bg-[#0A0A23]"
    >
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        My Skills
      </h2>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
        Technologies and tools I use to bring ideas to life
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-0">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#0A0A23] rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 border border-transparent"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={skill.src}
                alt={skill.name}
                width={64}  // same as w-16 (16 * 4)
                height={64} // same as h-16 (16 * 4)
                className="mx-auto"
                priority
              />
            </div>
            <h3 className="text-lg font-semibold text-white">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
