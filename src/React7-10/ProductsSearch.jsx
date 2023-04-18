import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export const ProductsSearch = () => {
  const [productData, setProductData] = useState([]);
  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/products");
      if (res.status === 200) {
        setProductData(res.data.products);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    const filteredData = productData.filter((item) =>
      item.name.startsWith(event.target.value)
    );
    console.log(filteredData);
    setProductData(filteredData);
  };
  return (
    <div>
      <h1>Search Data</h1>
      <input
        placeholder="enter product name"
        onChange={(event) => handleChange(event)}
      />
      {productData.map((item) => (
        <li key={item.name}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
          <p>{item.rating}</p>
        </li>
      ))}
    </div>
  );
};
