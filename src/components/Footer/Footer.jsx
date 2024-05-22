import { CiDeliveryTruck } from "react-icons/ci";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { GiLeafSkeleton } from "react-icons/gi";
import { Link } from "react-router-dom";
import { PiMedalLight } from "react-icons/pi";
import { GoGift } from "react-icons/go";

const Footer = () => {
  return (
    <div>
      <div className="footer-top">
        <div className="footer-top-item">
          <CiDeliveryTruck style={{ fontSize: "1.5em" }} />
          <p>Free Shipping On $70+</p>
        </div>
        <div className="footer-top-item">
          <GoGift style={{ fontSize: "1.5em" }} />
          <p>Gift Cards Available</p>
        </div>
        <div className="footer-top-item">
          <PiMedalLight style={{ fontSize: "1.5em" }} />
          <p>2-Year Guarantee</p>
        </div>
        <div className="footer-top-item">
          <GiLeafSkeleton style={{ fontSize: "1.5em" }} />
          <p>Recycled & Recyclable</p>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>We&apos;re Here To Help</h3>
            <p>hello@okabashi.com</p>
            <p>1-800-443-6573</p>
            <p>Support Hours: Mon-Fri 9am-5pm EST</p>
            <div className="social-icons">
              <FaFacebook />
              <FaPinterest />
              <FaInstagram />
            </div>
          </div>
          <div className="footer-column">
            <h3>Customer Service</h3>
            <p>
              <Link href="/contact">Contact Us</Link>
            </p>
            <p>
              <Link href="/account">My Account</Link>
            </p>
            <p>
              <Link href="/size-chart">Size Chart</Link>
            </p>
            <p>
              <Link href="/faq">FAQ</Link>
            </p>
            <p>
              <Link href="/shipping">Shipping</Link>
            </p>
            <p>
              <Link href="/returns">Returns & Exchanges</Link>
            </p>
            <p>
              <Link href="/vip">Become A VIP</Link>
            </p>
            <p>
              <Link href="/gift-cards">E-Gift Cards</Link>
            </p>
            <p>
              <Link href="/loyalty">Loyalty & Referral Programs</Link>
            </p>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <p>
              <a href="/about">About Us</a>
            </p>
            <p>
              <a href="/factory">Our Factory</a>
            </p>
            <p>
              <a href="/allergy">Allergy Information</a>
            </p>
            <p>
              <a href="/guarantee">Our Guarantee</a>
            </p>
            <p>
              <a href="/blog">Blog: The Okabashi Way</a>
            </p>
            <p>
              <a href="/careers">Careers</a>
            </p>
            <p>
              <a href="/philanthropy">Philanthropy</a>
            </p>
            <p>
              <a href="/social-ambassador">Social Ambassador Program</a>
            </p>
            <p>
              <a href="/affiliate">Affiliate Program</a>
            </p>
          </div>
          <div className="footer-column">
            <h3>Join Our VIP List</h3>
            <p>
              Subscribe to get special offers, private sales, and new arrival
              announcements.
            </p>
            <form>
              <input type="email" placeholder="Enter email" />
              <button type="submit">SIGN UP</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
