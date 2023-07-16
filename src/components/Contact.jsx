import React, { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const Notify = () => {
    toast("Email sent succesfully",
    {
      className: "custom-toast",
      autoClose: false,
      closeOnClick: true,
      position: toast.POSITION.TOP_RIGHT,
    })
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_t4j0kmh', 
      'template_wdx8leo', 
      form.current, 
      'UXtRnZbl_L2oPSBJQ'
      )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  const contact_info = [
    { logo: "mail", text: "benitadaniel.dev@gmail.com" },
    { logo: "logo-whatsapp", text: "+234 909 478 8545" },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-stone-100">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-[#A45C40]">Me</span>
        </h3>
        <p className="text-gray-600 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-12 max-w-5xl bg-[#A45C40] shadow-lg md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5" ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Your Name" className="placeholder-[#ECD1C2]" name="user_name" />
            <input type="Email" placeholder="Your Email Address" className="placeholder-[#ECD1C2]" name="user_email"/>
            <textarea placeholder="Your Message" rows={10} className="placeholder-[#ECD1C2]" name="message"></textarea>
            <button className="btn-secondary w-fit" type="submit" onClick={Notify}>Send Message</button>
          </form>
          <div className="flex flex-col gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-3 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-stone-100 bg-[#A45C40] border rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
