import MiniNavigation from "../components/MiniNavigation/MiniNavigation";
import MainNavigation from "../components/MainNavigation/MainNavigation";
// import { FaFlagUsa, FaRecycle } from "react-icons/fa";
// import { GiWashingMachine } from "react-icons/gi";
import "./Home.css";
import Information from "../components/Information/Information.jsx";
// import BestSellers from "./BestSellers.jsx";
// import { Link } from "react-router-dom";
import ProductsCarousel from "../components/CarouselPages/ProductsCarousel.jsx";
import footHealthShoesImg from "../assets/Okabashi-shoes-flip-flop-arch-support-features_720x.jpg";
import DisplayHome from "../components/MainBackgroundHome/DisplayHome.jsx";
import DisplayMini from "../components/DisplayMini/DisplayMini.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div>
      <MiniNavigation />
      <MainNavigation />
      <DisplayHome />
      <Information />
      <ProductsCarousel />
      <div className="footHealthShoes">
        <img
          className="footHealthShoesImg"
          src={footHealthShoesImg}
          alt="footHealthShoes is missing"
        />
        <div className="content">
          <p className="signature">OUR SIGNATURE FEATURES</p>
          <h1>Designed for Comfort</h1>
          <p>
            <b>
              Every Okabashi shoe is carefully designed with foot therapy in
              mind. Our designers understand the structure of the foot, how it
              moves, and the impact it can have on other parts of the body.
              Comfortable and durable - what a flip flop should be.
            </b>
          </p>
          <button className="btn1">Learn More</button>
        </div>
      </div>
      <DisplayMini />
      <Footer />
    </div>
  );
};

export default Home;
