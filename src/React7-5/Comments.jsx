import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";
export const Comments = () => {
  const [quotesData, setQuotesData] = useState({});

  const getData = async () => {
    const response = await fakeFetch();
    // console.log(response);
    setQuotesData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    getData();
  };

  return (
    <div style={{ textAlign: "left" }}>
      <p>{`"${quotesData?.content}"`}</p>
      <p>-{quotesData?.author}</p>

      <button style={{ margin: "3px" }} onClick={handleClick}>
        New Quote
      </button>
    </div>
  );
};
