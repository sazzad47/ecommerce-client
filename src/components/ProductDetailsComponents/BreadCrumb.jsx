import React, { useContext } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { ProductContext } from "../../pages/ProductDetails/ProductDetails";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 10px;
`;
const BreadCrumb = () => {
  const { productData } = useContext(ProductContext);

  return (
    <Container>
      <Wrapper>
        <Breadcrumbs aria-label="breadcrumb">
          <Link className="default_anchor" to="/">Home</Link>
          <Link className="default_anchor" to={`/category/${productData?.category_id}`}>
            {productData?.category_title}
          </Link>
          <Typography color="text.primary">{productData?.name}</Typography>
        </Breadcrumbs>
      </Wrapper>
    </Container>
  );
};

export default BreadCrumb;
