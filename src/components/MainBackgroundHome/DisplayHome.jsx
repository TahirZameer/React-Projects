import { Link } from "react-router-dom";
import "./DisplayHome.css";

const DisplayHome = () => {
  return (
    <div className="background-image">
      <div className="content1">
        <p className="newArrivals">NEW ARRIVALS HAVE DROPPED</p>
        <h1 className="newArrivals1">Spring Colors In Full Bloom</h1>
        <p className="newArrivals2">
          All Your Favorite Styles In Bright Eye-Catching Colors
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

export default DisplayHome;
