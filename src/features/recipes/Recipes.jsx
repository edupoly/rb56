import React from "react";
import { useGetAllRecipesQuery } from "../../services/recipes";

function Recipes() {
  var { isLoading, data } = useGetAllRecipesQuery();

  return (
    <div className="border border-2 p-2 m-2 border-danger">
      <h1>Recipes</h1>
      {isLoading && <b>Loading...</b>}
      {!isLoading && JSON.stringify(data)}
    </div>
  );
}

export default Recipes;
