import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3400/products")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="border border-2 p-2 m-2 border-danger">
      <h1>Products</h1>
    </div>
  );
}

export default Products;
