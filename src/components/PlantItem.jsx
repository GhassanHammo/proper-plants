import React from "react";

export default function PlantItem({ plant, displayPlant }) {
  //console.log(plant);
  return (
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
        Add to Cart
      </button>
    </div>
  );
}
