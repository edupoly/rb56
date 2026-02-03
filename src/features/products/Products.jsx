import React from "react";
import { useGetAllProductsQuery } from "../../services/products";

function Products() {
  var { isLoading, data } = useGetAllProductsQuery();
  return (
    <div className="border border-2 p-2 m-2 border-secondary">
      <h1>Products</h1>
      {isLoading && (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      {!isLoading &&
        data.products.map((product) => {
          return <li>{product.title}</li>;
        })}
    </div>
  );
}

export default Products;
