import React from "react";
import aboutImg from "../assets/images/about-img.png";
const About = () => {
  const info = [
    { text: "Years Experience", count: "03" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Worked At", count: "02" },
  ];
  return (
    <section id="about" className="py-10 text-stone-100">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-[#A45C40]">Me</span>
        </h3>
        <p className="text-gray-600 my-3 text-lg">My Introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-600 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto text-sm">
              I am a passionate Frontend Developer with expertise in 
              creating pixel-perfect, responsive web pages using clean code. 
              I focus on delivering seamless user experiences by integrating 
              well-developed functionality. I utilize tools like React-query 
              and Axios to build fully functional and visually appealing user 
              interfaces that meet requirements. My attention to detail, responsive 
              design skills, and clean coding practices ensure exceptional results. 
              I continuously learn and stay up-to-date with the latest web development 
              trends to enhance my skills and provide the best possible outcomes.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-stone-100">
                      {content.count}
                      <span className="text-[#A45C40]">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="https://docs.google.com/document/d/1QZgHvxxkMMXkWlUsjj75N6QJDCja3N2NW4cb-2Q_Ldo/edit?usp=sharing" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <div className="bg-[#A45C40] rounded-xl pt-16">
              <img
                src={aboutImg}
                alt=""
                className="object-contain"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
