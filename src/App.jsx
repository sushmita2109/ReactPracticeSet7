import { useState } from "react";
import { Weather } from "./React7-1/Weather";
import { UserAdress } from "./React7-2/UserAdress";
import { MovieDisplay } from "./React7-3/MovieDisplay";
import { CompantDetails } from "./React7-4/CompanyDetails";
import { Comments } from "./React7-5/Comments";
import { MoviesData } from "./React7-6/MoviesData";
import { ProductDisplay } from "./React7-7/ProductDisplay";
import { ProductSorted } from "./React7-8/ProductSorted";
import { SortedProduct } from "./React7-9/SortedProduct";
import { ProductsSearch } from "./React7-10/ProductsSearch";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Weather />
      <UserAdress />
      <MovieDisplay />
      <CompantDetails />
      <Comments />
      <MoviesData />
      <ProductDisplay />
      <ProductSorted />
      <SortedProduct />
      <ProductsSearch />
    </div>
  );
}

export default App;
