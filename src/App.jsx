import { useState } from "react";
import { Weather } from "./React7-1/Weather";
import { UserAdress } from "./React7-2/UserAdress";
import { MovieDisplay } from "./React7-3/MovieDisplay";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Weather />
      <UserAdress />
      <MovieDisplay />
    </div>
  );
}

export default App;
