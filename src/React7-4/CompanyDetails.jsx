import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";
import { CompanyDisplay } from "./CompanyDisplay";

export const CompantDetails = () => {
  const [companyData, setcompanyData] = useState([]);

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/users");
      setcompanyData(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <CompanyDisplay companyData={companyData} />
    </div>
  );
};
