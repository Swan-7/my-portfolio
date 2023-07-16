import React from "react";
import hireMe from "../assets/images/team.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-stone-100">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-[#A45C40]">Me</span>
        </h3>
        <p className="text-gray-600 mt-3 text-lg">I would be an added value to your Team</p>
      </div>
      <div className="bg-[#A45C40] relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-[1.4rem] font-semibold">
            Optimize your Team with an Adept Developer
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6 text-sm">
            With a proven track record in delivering high-quality projects, I bring expertise in modern web development frameworks and a passion for crafting efficient and user-friendly applications. I thrive in collaborative environments, valuing open communication and teamwork. Leveraging my technical skills, attention to detail, and problem-solving abilities, I am committed to delivering impactful solutions. Let's join forces to elevate your projects and optimize your team's success.
          </p>
          <button className="btn-secondary"><a href="#contact">Say Hello</a></button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="h-80 lg:absolute bottom-0 -right-64 object-cover lg:w-5/6"
        />
      </div>
    </section>
  );
};

export default Hireme;
