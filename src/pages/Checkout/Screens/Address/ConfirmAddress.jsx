import React from "react";
import { UserHooks } from "../../../../Features";
import AddressCard from "./AddressCard";
const ConfirmAddress = () => {
  const { useUserDetails } = UserHooks;
  const { user } = useUserDetails();
  return (
    <div>
      <div className="d-flex f-wrap a-center g-15" style={{ padding: "15px" }}>
        <p>
          Name : <b>{user.name}</b>
        </p>
        <p>
          Phone : <b>{user.phone}</b>
        </p>
        <p>
          Email : <b>{user.email}</b>
        </p>
      </div>
      {user?.adresses.map((address) => {
        return <AddressCard key={address.id} address={address} />;
      })}
    </div>
  );
};

export default ConfirmAddress;
