import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";
export const SortedProduct = () => {
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

  const comprasion = (a, b) => a.rating - b.rating;

  return (
    <div>
      <h1>Ratting Sorted</h1>
      {productData
        .slice()
        .sort(comprasion)
        .map((item) => (
          <li
            key={item.name}
            style={{
              listStyle: "none",
              border: "1px solid black",
              margin: "0.5rem 0.5rem",
              borderRadius: "5px",
            }}
          >
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Rating: {item.rating}</p>
          </li>
        ))}
    </div>
  );
};
