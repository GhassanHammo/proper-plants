import { useState } from "react";
import { PlantContext } from "./PlantContext";

const PlantProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // 1. Use array for cart
  const [plant, setPlant] = useState([]);
  const value = {
    cart,
    plant,
    setCart,
    setPlant,
    
  };
  return (
    <PlantContext.Provider value={value}>{children}</PlantContext.Provider>
  );
};

export default PlantProvider;
