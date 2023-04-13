import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";
import { UserView } from "./UserView";

export const UserAdress = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/user");
      if (res.status === 200) {
        setUserData(res.data);
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
      <UserView userData={userData} />
    </div>
  );
};
