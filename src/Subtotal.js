import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal(0 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> this order contains a gift
            </small>
          </>
        )}
        decimaScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />
      <button> proceed to checkout </button>
    </div>
  );
}

export default Subtotal;
