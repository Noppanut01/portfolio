import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import Marquee from "../components/Marquee";
import { skills } from "../constants";

const SkillCard = ({ icon, name }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-32 overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm"
      )}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <img
          className="rounded-lg bg-white/10 p-2"
          width="40"
          height="40"
          alt=""
          src={icon}
        />
        <figcaption className="text-sm font-medium text-white">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing mb-16" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          {/* Profile Photo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-60 z-20">
            <img
              src="assets/profile.jpg"
              alt="Noppanut Maiprot"
              className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-white/30 shadow-2xl"
              onError={(e) => {
                e.target.src = 'https://ui-avatars.com/api/?name=Noppanut+Maiprot&background=6366f1&color=fff&size=192';
              }}
            />
          </div>
          <div className="z-10">
            <p className="headtext">Hi, I'm Noppanut Maiprot</p>
            <p className="subtext">
              4th year Computer Engineering student from KMUTNB, passionate about creating
              innovative mobile apps, web applications, and exploring AI/ML technologies.
            </p>
            {/* Download Buttons */}
            <div className="flex gap-2 mt-3">
              <a
                href="docs/transcipt.pdf"
                download="transcript.pdf"
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-blue-600/80 rounded hover:bg-blue-700/80 transition-colors"
              >
                📄 Transcript
              </a>
              <a
                href="docs/resume.pdf"
                download="resume.pdf"
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-green-600/80 rounded hover:bg-green-700/80 transition-colors"
              >
                📋 Resume
              </a>
            </div>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 - Education */}
        <div className="grid-default-color grid-2">
          <div className="flex items-center justify-between w-full h-full p-6">
            {/* Left side - Education Info */}
            <div className="text-left flex-1">
              <div className="mb-4">
                <svg className="w-8 h-8 text-blue-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <h3 className="headtext text-lg mb-2">Education</h3>
              </div>

              <div className="space-y-2">
                <p className="text-white font-semibold">KMUTNB</p>
                <p className="text-neutral-300 text-sm">Computer Engineering</p>
                <p className="text-neutral-400 text-sm">2022 - Present</p>
              </div>
            </div>

            {/* Right side - GPA */}
            <div className="text-center">
              <div className="p-6 bg-white/10 rounded-xl min-w-[100px]">
                <p className="text-white font-bold text-4xl mb-1">3.25</p>
                <p className="text-neutral-300 text-sm font-medium">GPA</p>
              </div>
            </div>
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-default-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Location</p>
            <p className="subtext">
              117 ซ.พิบูลย์สงคราม 22 อ.บางเขน จ.นนทบุรี 11000
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
      </div>

      {/* Skills Section */}
      <div className="items-start mt-16 md:mt-20">
        <h3 className="text-3xl font-bold mb-8 text-center">My Skills & Expertise</h3>
        <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {skills.slice(0, 4).map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {skills.slice(4).map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
