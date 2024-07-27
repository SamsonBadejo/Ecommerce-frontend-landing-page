import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobile,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-200 pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
            <a
              href="#home"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              SAMMIEVIBEx
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis, consectetur adipisicing elit.
            </p>
            <p className="text-gray-500 mt-4 mb-4">SAMMIEVIBEx Gadget Store </p>
            <a
              href="#link"
              target="blank"
              className="bg-primary/90 text-white text-sm py-2 px-4 rounded-full mt-4"
            >
              Visit my Github Page
            </a>
          </div>
          {/* Quick Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index} className="hover:scale-105 duration-300">
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-primary duration-300 py-2 "
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Quick Links 2nd section*/}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index} className="hover:scale-105 duration-300">
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-primary duration-300 py-2 "
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <div>
                <h1 className="text-xl font-semibold sm:text-left mb-3">
                  Address
                </h1>
                <div className="flex items-center gap-3 mb-5">
                  <FaLocationArrow className="text-2xl hover:text-primary duration-300" />
                  <p>Badejo, Samson Oluwaseun</p>
                </div>

                <div className="flex items-center gap-3">
                  <FaMobile className="text-2xl hover:text-primary duration-300" />
                  <p>+2348171397358</p>
                </div>
                {/* socials section */}
                <div className="flex  items-center gap-3 mt-6">
                  <a href="#/">
                    <FaLinkedin className="text-2xl hover:text-primary duration-300" />
                  </a>
                  <a href="#/">
                    <FaGithub className="text-2xl hover:text-primary duration-300" />
                  </a>
                  <a href="#/">
                    <FaInstagram className="text-2xl hover:text-primary duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
