import React, { useState } from "react";
import { Layout, Modal } from "../../components";
import {
  ProfileContainer,
  ProfileInfo,
  ButtonPlus,
} from "./ProfileStyle";
import { UserHooks } from "../../Features";
import AddressCard from "./AddressCard";
import RecentOrders from "./RecentOrders";
import NewAddressForm from "./newAddressForm";
import UpdateUserForm from "./UpdateUserForm";
import { Avatar, Paper } from "@mui/material";

const Profile = () => {
  const [add, setAdd] = useState(false);
  const { useUserDetails } = UserHooks;
  const { user } = useUserDetails();
  const firstname =
    Object.keys(user).length > 0 ? user?.name?.split(" ")[0] : "";
  const secondName =
    Object.keys(user).length > 0 ? user?.name?.split(" ")[1] : "";

  return (
    <Layout>
      <ProfileContainer className="d-flex g-15">
        <ProfileInfo className="f-1">
          <h2 style={{ textAlign: "center" }}>Welcome, {user.name}</h2>
          <Paper sx={{ bgcolor: "white", padding: "1rem" }} elevation={2}>
            <Avatar
              sx={{
                width: "100px",
                height: "100px",
                bgcolor: "secondary.main",
                margin: "0 auto",
                marginBottom: "3rem",
              }}
            >
              <div className="img d-flex j-center a-center">
                {firstname[0] + secondName[0]}
              </div>
            </Avatar>
            <UpdateUserForm />
          </Paper>
          <Paper sx={{ bgcolor: "white", padding: "1rem", marginTop: "3rem" }} elevation={2}>
            <div style={{marginBottom: "1rem"}} className="d-flex j-between a-center">
              <h4 style={{padding: 0, margin: 0}}>Addresses</h4>
              <div>
                <ButtonPlus onClick={() => setAdd(true)}>+</ButtonPlus>
              </div>
            </div>
            {user?.adresses?.map((address) => {
              return <AddressCard key={address.id} address={address} />;
            })}
          </Paper>
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
