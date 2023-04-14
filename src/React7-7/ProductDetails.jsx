import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";
import { ProductDisplay } from "./ProductDisplay";

export const ProductDetails = () => {
  const [productData, setProductdata] = useState([]);

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/products");
      //   console.log("hello", res);
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

  return (
    <div>
      <h1>Products</h1>
      <ProductDisplay productData={productData} />
    </div>
  );
};
