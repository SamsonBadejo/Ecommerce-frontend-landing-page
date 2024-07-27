import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/vr.png";
import Image2 from "../../assets/hero/headphone.png";
import Image3 from "../../assets/category/macbook.png";
import "./Hero.css";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    img: Image2,
    subtitle: "PURCHASE",
    title: "YOUR",
    title2: "BEATS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image1,
    subtitle: "PURCHASE",
    title: "YOUR",
    title2: "BEATS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "PURCHASE",
    title: "YOUR",
    title2: "BEATS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({handleOrderPopup}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    // arrows: true,
  };

  return (
    // Hero Section
    <div className="container">
      <div
        className="overflow-hidden rounded-3xl min-h-[550px]
      sm:min-h-[500px] hero-bg-color flex justify-center items-center"
      >
        {/* main[650px] */}
        <div className="container pb-8 sm:ph-0">
          {/* Hero Section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                      {data.title2}
                    </h1>
                    <div>
                      <Button
                        text="Shop Now"
                        bgColor="bg-primary dark:bg-white dark:bg-opacity-10"
                        textColor="text-white"
                        handleOrderPopup={handleOrderPopup}
                      />
                    </div>
                  </div>
                  {/* img section */}
                  <div className="order-1 sm:order-2">
                    <img
                      src={data.img}
                      alt="hero"
                      className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
