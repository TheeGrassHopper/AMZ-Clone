import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const history = useHistory()
  const [{ basket, user }, dispatch] = useStateValue();

  const loggedInUser = () => {
    if(user){
      history.push('/payment')
    } else {
      history.push('/login')
    }
  }
  return <div className="subtotal">
    <CurrencyFormat
      renderText={(value) => (
        <>
          <p>
            Subtotal ({basket.length} items): <strong>{value}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
    
    <button onClick={loggedInUser}>Proceed to Checkout</button>
  </div>
}

export default Subtotal;
