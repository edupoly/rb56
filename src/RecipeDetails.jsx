import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  let { id } = useParams();
  let [recipe, setRecipe] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
      });
  }, [id]);
  return (
    <div>
      <h1>Recipe Details</h1>
      <h3>{recipe?.name}</h3>
      <img src={recipe.image} className="w-25" alt="" />
    </div>
  );
}

export default RecipeDetails;
