import { Link } from "react-router-dom";
import "./DisplayMini.css";

const DisplayMini = () => {
  return (
    <div className="background-image-miniDisplay">
      <div className="content1">
        <p className="newArrivals">2-YEAR QUALITY GUARANTEE</p>
        <h1 className="newArrivals1">The Maui</h1>
        <p className="newArrivals2">
          America&apos;s #1 USA-Made Women&apos;s Flip Flop
        </p>
        <div className="buttons">
          <button>
            <Link to="/BestSellers">Learn More</Link>
          </button>
          <button>
            <Link to="/CollectionAll">shop all shoes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayMini;
