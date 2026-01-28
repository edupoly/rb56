import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  let { id } = useParams();
  let [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  return (
    <div>
      <h1>ProductDetails</h1>
      <h3>{product?.title}</h3>
      <img src={product.thumbnail} alt="" />
    </div>
  );
}

export default ProductDetails;
