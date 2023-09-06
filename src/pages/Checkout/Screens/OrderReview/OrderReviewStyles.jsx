import styled from "styled-components";
import { mobile, tablet } from "../../../../responsive";

export const OrderReviewContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  width: 80%;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const ItemContainer = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  display: flex;
`;

export const ItemImageConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 200px;
  max-height: 150px;
  ${mobile({
    width: "100px",
  })}

  ${tablet({
    width: "100px",
  })}
`;

export const ItemImage = styled.img`
  width: auto;
  height: 80%;
  margin-right: 10px;
`;

export const UserDetailsContainer = styled.div`
  margin-top: 20px;
  `;
  
  export const UserDetailsItem = styled.div`
  margin-bottom: 10px;
`;

export const CartTotalContainer = styled.div`
  margin-top: 20px;
`;

export const PaymentMethodContainer = styled.div`
  margin-top: 20px;
`;
