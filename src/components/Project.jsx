import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project_person from "../assets/images/projects-2.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Hospital App",
      github_link: "https://github.com/Swan-7/sycare_hospital-website-clone",
      live_link: "https://preeminent-gnome-7b161e.netlify.app/",
    },
    {
      img: project2,
      name: "Eplaza software",
      github_link: "https://github.com/escltd/eplaza-uiqrmenu",
      live_link: "https://eplaza.cloud/#/",
    },
    {
      img: project3,
      name: "Airbnb clone",
      github_link: "https://github.com/Swan-7/airbnb-clone",
      live_link: "https://airbnb-clone-assessment.netlify.app/",
    },
    {
      img: project4,
      name: "Revive Haircare",
      github_link:
        "#",
      live_link: "http://www.revivehaircosmetics.com/",
    },
    {
      img: project5,
      name: "Bank App",
      github_link: "https://github.com/Swan-7/sycare_hospital-website-clone",
      live_link: "https://deft-starship-cb7629.netlify.app/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-stone-100">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-[#A45C40]">Projects</span>
        </h3>
        <p className="text-gray-600 mt-3 text-lg">My recent works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-[#A45C40] rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-[#A45C40] bg-[#ECD1C2] px-2 py-1 inline-block rounded-lg"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-[#A45C40] bg-[#ECD1C2] px-2 py-1 inline-block rounded-lg"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" className="w-1/3 absolute bottom-0 top-60 -right-2"/>
        </div>
      </div>
    </section>
  );
};

export default Project;
