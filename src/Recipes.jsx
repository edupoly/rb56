import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Recipes() {
  let [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes([...data.recipes]);
      });
  }, []);
  return (
    <div className="border border-2 p-2 m-2 border-primary">
      <h1>Recipes</h1>
      <div className="d-flex">
        <ul className="w-25">
          {recipes.map((recipe) => {
            return (
              <li>
                <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="w-75">
          <h3>Recipe Details</h3>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
