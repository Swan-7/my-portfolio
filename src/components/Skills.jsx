import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-react",
      name: "React",
      count: 86,
    },
    {
      logo: "logo-sass",
      name: "Scss",
      count: 90,
    },
    {
      logo: "logo-vue",
      name: "Vue",
      count: 70,
    },
    {
      logo: "logo-github",
      name: "Git",
      count: 85,
    },
    {
      logo: "cube",
      name: "Material-UI",
      count: 66,
    },
    {
      logo: "logo-css3",
      name: "Css3",
      count: 90,
    },
    {
      logo: "logo-npm",
      name: "NPM",
      count: 85,
    },
    {
      logo: "logo-nodejs",
      name: "Javascript",
      count: 60,
    },
  ];
  return (
    <section id="skills" className="py-16  relative w-full">
      <div className="mt-8 text-[#A45C40] text-center">
        <h3 className="text-4xl font-semibold text-stone-100">
          My <span className="text-[#A45C40]">Skills</span>
        </h3>
        <p className="text-gray-600 mt-3 text-lg">My Frameworks</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap w-[60%] mx-auto">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-[#A45C40] relative pt-3 min-w-[8rem] max-w-[12rem] p-1 rounded-xl shadow-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(164, 92, 64) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-[4.7rem] h-[4.7rem] flex items-center justify-center rounded-full mx-auto"
              >
                <div className="text-5xl w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center group-hover:text-[#A45C40]">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="text-md font-semibold mt-1">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
