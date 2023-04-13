import { useState } from "react";

export const CompanyDisplay = ({ companyData }) => {
  const [companyNames, setCompanyNames] = useState("");
  const handleCompany = (event) => {
    if (event.target.value === "all") {
      setCompanyNames("");
    } else {
      setCompanyNames(event.target.value);
    }
  };
  const shouldFilter = (dataFilter) => {
    return companyNames.length > 0
      ? dataFilter.company === companyNames
      : dataFilter;
  };
  return (
    <div>
      <label htmlFor="company">Filter by Company:</label>
      <select onChange={handleCompany} name="company" id="company">
        <option value="all">All companies</option>
        {companyData.map((item) => (
          <option key={item.name} value={item.company}>
            {item.company}
          </option>
        ))}
      </select>
      {companyData.filter(shouldFilter).map((item) => (
        <div key={item.name}>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.website}</p>
          <p>{item.company}</p>
        </div>
      ))}
    </div>
  );
};
