import { useState } from "react";

export const UserView = ({ userData }) => {
  const [isShow, setIsShow] = useState(false);

  const handleAddress = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <p>
        Name:<span>{userData.name}</span>
      </p>
      <p>
        Email:<span>{userData.email}</span>
      </p>
      <p>
        Phone:<span>{userData.phone}</span>
      </p>
      <button onClick={handleAddress}>Hide Address</button>
      <div>
        {isShow ? (
          <div>
            <p>{userData.address.street}</p>
            <p>{userData.address.suite}</p>
            <p>{userData.address.city}</p>
            <p>{userData.address.zipcode}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
