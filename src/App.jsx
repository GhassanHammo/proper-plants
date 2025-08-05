import { useState } from "react";
import "./index.css";
import data from "./data";
import CartList from "./components/CartList";
import PlantItem from "./components/PlantItem";

function App() {
  // const [plant, setPlant] = useState({});
  const [cart, setCart] = useState([]); // 1. Use array for cart
  const [plant, setPlant] = useState([]);
  function updateCart(newItem) {
    const oldItem = cart.find((item, idx) => {
      return item.id === newItem.id;
    });
  }

  const displayPlant = (element) => {
    setCart((prevCart) => {
      const found = prevCart.find((item) => item.id === element.id);
      if (found) {
        return prevCart.map((item) =>
          item.id === element.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...element, quantity: 1 }];
      }
    });
  };

  // const displayPlant = (element) => {
  //   console.log(element)
  //   setPlant(element);
  // };
  //console.log(data);
  return (
    <>
      <div>
        <h5>Cart List</h5>

        <CartList plant={cart} setCart={setCart} />
      </div>

      <CartList />
      <div>
        <div>
          {data.map((element) => {
            return <PlantItem plant={element} displayPlant={displayPlant} />;
          })}
        </div>
      </div>
      {/* <div className="individual-plant" key={plant.id}>
        <div>
      <h1>{plant.name}</h1>
      </div>
      <div>
        <h1>{plant.image}</h1>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => displayPlant(plant)}
      >
        Add 
      </button>
    </div>
    <div className="individual-plant" key={plant.id}>
        <div>
      <h1>{plant.name}</h1>
      </div>
      <div>
        <h1>{plant.image}</h1>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => displayPlant(plant)}
      >
        Remove
      </button>
    </div> */}
    </>
  );
}

export default App;
