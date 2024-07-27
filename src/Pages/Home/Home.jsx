import React from "react";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/category/Category";
import Category2 from "../../components/category/Category2";
import Services from "../../components/Services/Services";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Products/Products";
import Blogs from "../../components/Blogs/Blogs";
import headphone from "../../assets/hero/headphone.png";
import smartwatch2 from "../../assets/category/smartwatch2-removebg-preview.png";
import RootLayouts from "../../layouts/RootLayouts";
import Footer from "../../components/Footer/Footer";
// import Popup from "../../components/Popup/Popup";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};

const Home = () => {

  // const [OrderPopup, setOrderPopup] = React.useState(true);

  // const handleOrderPopup = () => {
  //   setOrderPopup(!OrderPopup);
  // };
  return (
    <div>
      {/* <Hero handleOrderPopup={handleOrderPopup} /> */}
      <RootLayouts />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Footer />
      {/* <Popup OrderPopup={OrderPopup} handleOrderPopup={setOrderPopup}/> */}
    </div>
  );
};

export default Home;
