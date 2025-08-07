import { useContext, useState } from "react";
import "./index.css";
import data from "./data";
import CartList from "./components/CartList";
import PlantItem from "./components/PlantItem";
import { PlantContext } from "./components/PlantContext";

function App() {
  // const [cart, setCart] = useState([]);
  // const [plant, setPlant] = useState({});
  const {cart, setCart } = useContext(PlantContext);
  const {plant, setPlant } = useContext(PlantContext);
  console.log(cart, plant)
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
  // console.log(data);
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
    </>
  );
}

export default App;
