import PropTypes from "prop-types";
import "./Products.css";

const Product = (props) => {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="Product-Imgage" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired, // Assuming price is a number; change to string if it's not
  description: PropTypes.string.isRequired,
};

export default Product;
