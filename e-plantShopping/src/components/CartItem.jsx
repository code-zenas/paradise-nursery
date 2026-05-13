import React, { useState } from "react";

function CartItem() {
  const [quantity, setQuantity] = useState(1);

  const price = 20;
  const total = quantity * price;

  return (
    <div>
      <h1>Shopping Cart</h1>

      <img
        src="https://via.placeholder.com/150"
        alt="Plant"
      />

      <h2>Snake Plant</h2>

      <p>Unit Price: ${price}</p>

      <p>Total: ${total}</p>

      <button onClick={() => setQuantity(quantity + 1)}>
        +
      </button>

      <span>{quantity}</span>

      <button
        onClick={() =>
          quantity > 1 && setQuantity(quantity - 1)
        }
      >
        -
      </button>

      <br />
      <br />

      <button>Delete</button>

      <button
        onClick={() => alert("Coming Soon")}
      >
        Checkout
      </button>

      <button>Continue Shopping</button>
    </div>
  );
}

export default CartItem;
