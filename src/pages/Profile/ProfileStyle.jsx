import styled from "styled-components";
import { colorsPalette } from "../../constants";
import { mobile, tablet } from "../../responsive";
export const ProfileContainer = styled.div`
  padding: 40px;
  ${tablet({
    flexDirection: "column",
    padding : "15px"
  })}
`;

export const ProfileInfo = styled.div`
 
  padding: 20px;
  border-radius: 8px;
 
`;

export const Preferences = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  .img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    background-color: ${colorsPalette[5]};
    color: white;
    font-size: 3rem;
    font-weight: bold;
  }
`;

export const UserInfo = styled.div`
  // Your styling here
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  select {
    background-color: white;
  }
  input,
  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 5px;
    box-sizing: border-box;
  }
`;

export const AddressGroup = styled.div`
  margin-bottom: 15px;
  max-height: 300px;
  overflow-y: auto;
`;

export const Button = styled.button`
  background-color: ${colorsPalette[4]};
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 15px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ButtonPlus = styled.button`
  background-color: ${colorsPalette[4]};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;
  font-size: 1.5rem;
  &:hover {
    background-color: #0056b3;
  }
`;
export const PurchaseHistory = styled.div`
  padding: 20px;
  border-radius: 8px;
`;

export const PurchaseCard = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
  }

  .date {
    font-weight: bold;
  }

  .product {
    color: #333;
  }

  .amount {
    color: #007bff;
    font-weight: bold;
  }
`;

export const AddressCardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddressDetails = styled.div`
  flex: 1;
`;

export const AddressTitle = styled.h3`
  margin: 0;
`;

export const AddressInfo = styled.p`
  margin: 5px 0;
`;

export const EditLink = styled.button`
  color: ${colorsPalette[4]};
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
`;
