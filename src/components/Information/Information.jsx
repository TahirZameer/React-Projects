// import React from "react";
import { FaFlagUsa, FaRecycle } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import "./Information.css";
const Information = () => {
  return (
    <div className="info">
      <h1>Everyone Deserves to Have Comfortable Feet</h1>
      <p>
        <b>
          We make the most comfortable shoes on the principles of foot wellness
          and reflexology.
        </b>
      </p>
      <div className="cardaLike">
        <div className="cardcontent">
          <div className="flagIcon">
            <FaFlagUsa />
          </div>

          <h1>Made in USA</h1>

          <p>
            <b>
              Handcrafted in Buford, GA, we&apos;re proud to be in the remaining
              1% of US footwear manufacturers in the United States.
            </b>
          </p>
        </div>
        <div className="cardcontent">
          <div className="flagIcon">
            <FaRecycle />
          </div>

          <h1>Eco-Friendly</h1>

          <p>
            <b>
              Our material is vegan, cruelty-free, and 100% recyclable. Scraps
              and non-saleable returns are turned into new product.
            </b>
          </p>
        </div>
        <div className="cardcontent">
          <div className="flagIcon">
            <GiWashingMachine />
          </div>

          <h1>Easy Care</h1>

          <p>
            <b>
              Our sandals will not shrink and the colors will not fade, no
              matter how often you wash them. Bye, germs!
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
