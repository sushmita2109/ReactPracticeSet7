import React, { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export const ProductDisplay = () => {
  const [productData, setProductdata] = useState([]);

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/products");
      if (res.status === 200) {
        setProductdata(res.data.products);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const comparision = (a, b) => a.price - b.price;

  const handleData = () => {
    // const priceUpdate = productData.slice().sort(comparision); //reference is same
    const priceUpdate = [...productData].sort(comparision);
    // console.log(priceUpdate);
    setProductdata(priceUpdate);
  };
  //   console.log("Data", productData);

  return (
    <div>
      <h1>Product Data</h1>
      <button onClick={() => handleData()}>Sort by Price</button>
      {productData.map((product) => (
        <li>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.quantity}</p>
        </li>
      ))}
    </div>
  );
};
