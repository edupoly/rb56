import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts([...data.products]);
      });
  }, []);
  return (
    <div className="border border-2 p-2 m-2 border-primary">
      <h1>Products</h1>
      <ul>
        {products.map((product) => {
          return (
            <li>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
