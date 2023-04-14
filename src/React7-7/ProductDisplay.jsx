import { useState } from "react";

export const ProductDisplay = ({ productData }) => {
  //   const [priceData, setPriceData] = useState([productData]);

  const comparision = (a, b) => {
    if (a.price < b.price) {
      return -1;
    } else if (a.price > b.price) {
      return 1;
    } else {
      return 0;
    }
  };
  //   const handleData = () => {
  //     const PriceUpdate = productData.sort(comparision);
  //     // setPriceData(PriceUpdate);
  //   };

  return (
    <div>
      <button onClick={() => productData.sort(comparision)}>
        Sort by Price
      </button>
      {productData?.map((product) => (
        <li key={product.name}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.quantity}</p>
        </li>
      ))}
    </div>
  );
};
