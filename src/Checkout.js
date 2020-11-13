import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout ad"
          className="checkout_ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
            <p>
              You have no item in this basket. To buy one or more items, click
              on the "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={item.id}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
