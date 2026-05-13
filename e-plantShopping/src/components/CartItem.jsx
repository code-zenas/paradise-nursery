import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            marginBottom: "20px",
            padding: "10px",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            width="150"
          />

          <h2>{item.name}</h2>

          <p>Unit Price: ${item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <p>
            Total Cost: $
            {item.price * item.quantity}
          </p>

          <button
            onClick={() => handleIncrease(item)}
          >
            +
          </button>

          <button
            onClick={() => handleDecrease(item)}
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Delete
          </button>
        </div>
      ))}

      <h2>
        Total Cart Amount: $
        {calculateTotalAmount()}
      </h2>

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
