import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating}) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("items in the basket",basket)
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className='product_price'>
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
         {/*{*/}
         {/*  Array(rating).fill().map((_, i) => (<p>🌟</p>))*/}
         {/*}*/}
          <p>{"⭐".repeat(rating)}</p>
        </div>
      </div>
      <img src={image}/>

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
