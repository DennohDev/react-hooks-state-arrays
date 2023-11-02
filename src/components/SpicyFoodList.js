import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  const [filterBy, setFilterBy] = useState("All");

  const foodsToDisplay = foods.filter((food) => {
     if (filterBy === "All") {
        return true;
     } else {
        return food.cuisine === filterBy
     }
  })

  function handleFilterChange(event) {
    setFilterBy(event.target.value)
  }

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    // console.log(newFood);
    const updatedArray = [...foods, newFood];
    setFoods(updatedArray);
  }

  function handleLiClick(id) {
    // const updatedArray = foods.filter((food)=>food.id !==id)
    // setFoods(updatedArray)
    const updatedArray = foods.map(food => food.id === id ? { ...food, heatLevel: food.heatLevel + 1 } : food)
    setFoods(updatedArray)
  }

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
