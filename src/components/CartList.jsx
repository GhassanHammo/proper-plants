import React from "react";

export default function CartList({ plant, setCart }) {
  //console.log(plant);
  function add(item) {
   setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  }
   function remove(idx) {
    setCart((prevCart) => {
      const item = prevCart[idx];
      if (item.quantity > 1) {
        return prevCart.map((cartItem, i) =>
          i === idx
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        return prevCart.filter((_, i) => i !== idx);
      }
    });
  }

  return (
    <main className="cart-list-column">
    {plant && plant.length > 0 ? (
      plant.map((item, idx) => (
        <div key={idx}>
          <h1>{item.image}</h1>
          <h2>{item.name}</h2>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => add(item)}
            >
              Add
            </button>
            <h6>Quantity: {item.quantity}</h6>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => remove(idx)}
            >
              Remove
            </button>
          </div>
        </div>
      ))
    ) : (
      <p></p>
    )}
  </main>
);
}
