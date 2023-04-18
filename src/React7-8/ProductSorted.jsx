import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";
export const ProductSorted = () => {
  const [getProduct, setGetProduct] = useState([]);

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/products");
      if (res.status === 200) {
        setGetProduct(res.data.products);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const comparision = (a, b) => a.price - b.price;

  const handleLow = () => {
    const priceUpdate = getProduct.slice().sort(comparision);
    setGetProduct(priceUpdate);
  };
  const comp = (a, b) => b.price - a.price;

  const handleHigh = () => {
    const priceUpdate = getProduct.slice().sort(comp);
    setGetProduct(priceUpdate);
  };
  const compare = (a, b) => a.name - b.name;

  return (
    <div>
      <button onClick={handleLow}>Low to High</button>
      <button onClick={handleHigh}>High to Low</button>
      <button onClick={getData}>Reset</button>
      <h1>Product </h1>
      {getProduct.map((item) => (
        <li key={item.name}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
        </li>
      ))}
    </div>
  );
};
