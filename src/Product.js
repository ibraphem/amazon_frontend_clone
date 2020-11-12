import { Star } from "@material-ui/icons";
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, rating, price, image }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addtoBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <Star key={index} />
            ))}
        </div>
      </div>

      <img src={image} alt="product" />
      <button onClick={addtoBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
