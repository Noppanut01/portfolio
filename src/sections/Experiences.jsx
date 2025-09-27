import { experiences } from "../constants";

const Experiences = () => {
  return (
    <section id="work" className="c-space pt-10 pb-2 mb-16">
      <h2 className="text-heading">My Work Experience</h2>
      <div className="max-w-4xl mx-auto mt-8">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-black-300/20 rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
                <p className="text-lg text-blue-400 font-medium">{experience.job}</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  {experience.date}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              {experience.contents.map((content, contentIndex) => (
                <div key={contentIndex} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-neutral-300 leading-relaxed">{content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
