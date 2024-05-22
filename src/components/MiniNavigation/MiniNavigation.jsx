// import React, { useState, useEffect } from "react";
// import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaPinterest, FaXTwitter } from "react-icons/fa6";
import "./MiniNavigation.css";

import { useState, useEffect } from "react";

const MiniNavigation = () => {
  const textOptions = [
    "Welcome to the site",
    "let's Explore",
    "If You Find Any Issue Contact Us",
    "If You want to Know About Us",
  ];

  // State to keep track of the current index for the textOptions array
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Function to update the text index and schedule the next update
  const rotateText = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
  };

  // Effect to trigger text rotation every 3 seconds and clear the timeout on unmount
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      rotateText();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [currentTextIndex]);

  return (
    <div className="mini-navigation">
      <div className="left-section">
        {/* Icons on the left side */}
        <div className="icon">
          <FaFacebook />
        </div>
        <div className="icon">
          <FaPinterest />
        </div>
        <div className="icon">
          <FaInstagram />
        </div>
        <div className="icon">
          <FaXTwitter />
        </div>
      </div>

      <div className="center-section">
        <h2>{textOptions[currentTextIndex]}</h2>
      </div>

      {/* <div className="right-section">
        <div className="contact-info">
          <p>
            <FaPhone /> +1 123-456-7890
          </p>
          <p>
            <FaEnvelope /> info@example.com
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default MiniNavigation;
