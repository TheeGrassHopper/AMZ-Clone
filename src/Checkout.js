import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal.js';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {

  const[{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />

        <div>
          <h3>Hello, {user ? user?.email : 'Guest'}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
            {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              price={item.price}
              title={item.title}
              rating={item.rating}
              image={item.image}
            />
            ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
        <h2>this is the subtotal </h2>
      </div>
    </div>
  );
}

export default Checkout;
