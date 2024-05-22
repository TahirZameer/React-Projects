// import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product.jsx";
import { productData, responsive } from "./data";
import { Link } from "react-router-dom";

const ProductsCarousel = () => {
  const product = productData.map((item) => (
    <Product
      key={item.id} // Assigning a unique key using item's id
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="App">
      <h1>React Multi Cards Carousel</h1>
      <p>
        <Link to="/BestSellers">view all</Link>
      </p>
      <Carousel
        // showDots={true}
        // customTransition="all .5"
        // transitionDuration={500}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={3000}
        infinite={true}
        responsive={responsive}
      >
        {product}
      </Carousel>
    </div>
  );
};

export default ProductsCarousel;
