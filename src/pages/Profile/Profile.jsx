import React, { useState } from "react";
import { Layout, Modal } from "../../components";
import {
  ProfileContainer,
  ProfileInfo,
  UserInfo,
  ProfilePicture,
  AddressGroup,
  ButtonPlus,
} from "./ProfileStyle";
import { UserHooks } from "../../Features";
import AddressCard from "./AddressCard";
import RecentOrders from "./RecentOrders";
import NewAddressForm from "./newAddressForm";
import UpdateUserForm from "./UpdateUserForm";

const Profile = () => {
  const [add, setAdd] = useState(false);
  const { useUserDetails } = UserHooks;
  const { user } = useUserDetails();
  const firstname = Object.keys(user).length > 0 ? user?.name?.split(" ")[0] : "";
  const secondName =
    Object.keys(user).length > 0 ? user?.name?.split(" ")[1] : "";

  return (
    <Layout>
      <ProfileContainer className="d-flex g-15">
        <ProfileInfo className="f-1">
          <ProfilePicture>
            <div className="img d-flex j-center a-center">
              {firstname[0] + secondName[0]}
            </div>
          </ProfilePicture>
          <UserInfo>
            <h2>Welcome, {user.name}</h2>
            <UpdateUserForm />
            <AddressGroup>
              <div className="d-flex j-between a-center">
                <h4>Addresses</h4>
                <div>
                  <ButtonPlus onClick={() => setAdd(true)}>+</ButtonPlus>
                </div>
              </div>
              {user?.adresses?.map((address) => {
                return <AddressCard key={address.id} address={address} />;
              })}
            </AddressGroup>
          </UserInfo>
        </ProfileInfo>
        <RecentOrders />
      </ProfileContainer>
      <Modal
        isOpen={add}
        onClose={() => setAdd(false)}
        title={"Adding new address"}
      >
        <NewAddressForm />
      </Modal>
    </Layout>
  );
};

export default Profile;
