import React, { useContext } from "react";
import styled from "styled-components";
import { checkoutContext } from "../../Checkout";
const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#e0e0e0" : "white")};
`;

const AddressTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const AddressInfo = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const AddressCard = ({ address }) => {
  const { setSelectedAddress, selectedAddress } = useContext(checkoutContext);
  const handleCardClick = () => {
    setSelectedAddress({ ...address });
    // onSelect(address); // Notify parent component of selection
  };

  return (
    <CardContainer
      className="d-flex w-100 f-wrap g-15 a-center"
      selected={
        selectedAddress?.postal_code + selectedAddress?.address ==
        address.postal_code + address.address
      }
      onClick={handleCardClick}
    >
      <AddressTitle>{address.city}</AddressTitle>
      <AddressInfo>{address.address}</AddressInfo>
      <AddressInfo>{address.postal_code}</AddressInfo>
    </CardContainer>
  );
};

export default AddressCard;
