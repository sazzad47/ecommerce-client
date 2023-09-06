import React from "react";
import {
  UserDetailsContainer,
  UserDetailsItem,
  SectionTitle,
} from "./OrderReviewStyles";

const UserDetails = ({ user, address }) => {
  return (
    <UserDetailsContainer>
      <SectionTitle>User Details</SectionTitle>
      <UserDetailsItem>Name: {user.name}</UserDetailsItem>
      <UserDetailsItem>Email: {user.email}</UserDetailsItem>
      <UserDetailsItem>
        Address: {address.address} {address.city} {address.postal_code}
      </UserDetailsItem>
      <UserDetailsItem>Phone: {user.phone}</UserDetailsItem>
    </UserDetailsContainer>
  );
};

export default UserDetails;
