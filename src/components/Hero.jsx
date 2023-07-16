import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
  const social_media = [
    "logo-linkedin",
    "logo-github",
    "mail"
  ];

  const getSocialLink = (icon) => {
    switch (icon){
      case 'logo-linkedin':
        return 'https://www.linkedin.com/in/swan-benitadaniel/';
      case 'logo-github':
        return 'https://github.com/Swan-7/my-portfolio';
      case 'mail':
        return 'mailto:benitadaniel.dev@gmail.com';
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex py-16 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full md:p-0 px-8">
        <img src={hero} alt="" className="md:w-2/3 h-full object-cover " />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-[2.8rem] text-2xl md:leading-normal leading-10 text-[#34334A] font-bold">
            <span className="text-[#A45C40] md:text-5xl text-4xl">
              Hello!
              <br />
            </span>
            My Name is <span>Benita Daniel</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Frontend Developer
          </h4>
          <button className="btn-primary mt-8" onClick={`mailto:benitadaniel.dev@gmail.com`}><a href="#contact">Contact Me</a></button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-[#A45C40] cursor-pointer "
              >
                <a href={getSocialLink(icon)} target="_blank" rel="noopener noreferrer">
                  <ion-icon name={icon}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
