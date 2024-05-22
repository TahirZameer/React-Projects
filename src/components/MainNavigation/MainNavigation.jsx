import { Link } from "react-router-dom";
import "./MainNavigation.css";
import { BsPerson } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import ourStory from "../collections/ourStory";

const MainNavigation = () => {
  return (
    <nav className="MainNavbar">
      <div className="logo">
        {/* <h1>Okabashi</h1> */}
        <Link to="/">
          <h1>Okabashi</h1>
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/CollectionAll">Shop All</Link>
          </li>
          <li>
            <Link to="/Women">Women</Link>
          </li>
          <li>
            <Link to="/Men">Men</Link>
          </li>
          <li>
            <Link to="/Kids">Kids</Link>
          </li>
        </ul>
      </div>
      {/* <div className="submenu">The Okabashi Way</div> */}
      <div className="menu-item">
        <div className="submenu">
          The Okabashi Way
          <div className="submenu-content">
            <br />
            <br />
            <Link to="/OurStory">Our Story</Link>
            <Link to="/MadeIn">Proudly Made in the PAKSITAN</Link>
            <Link to="/Factory">Our Factory</Link>
            <Link to="/Design">Designed For Comfort</Link>
            <Link to="/Sustainability">Sustainability</Link>
            <Link to="/Recyclable">Recycle Your Shoes</Link>
            <Link to="/Guarantee">2-Year Guarantee</Link>
          </div>
        </div>
      </div>

      <div className="left-side">
        <div className="reward">
          <Link to="./reward">
            <b>Earn Rewards</b>
          </Link>
        </div>
        <div className="account">
          <Link to="./registration">
            <b>Account</b> <BsPerson />
          </Link>
        </div>
        <div className="search">
          <Link to="./search">
            <b>Search</b>
            <IoSearchOutline />
          </Link>
        </div>
        <div className="cart">
          <Link to="./cart">
            <b>Cart </b>
            <AiOutlineShoppingCart />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
