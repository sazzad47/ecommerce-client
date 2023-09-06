import React from "react";
import styled from "styled-components";
import { colorsRandomly, SiteMargin } from "../../constants";
import { mobile, tablet } from "../../responsive";
import { CategoriesHooks } from "../../Features";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${SiteMargin}%;
  margin: 10px auto 0px auto;
  ${mobile({
    display: "none",
  })}

  ${tablet({
    display: "none",
  })}
`;
const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(10, 10%);
`;

const ImageContainer = styled.div`
  height: 135px;
  padding: 10px;
  display: flex;
`;
const ImageCircle = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: ${(props) => props.bg};
  border-radius: 50%;
  display: flex;
`;

const Image = styled.img`
  margin: auto;
  width: 60%;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const onCat = {
  margin: "0px 10px",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
  color: "black",
};

const CategoryLine = () => {
  const { useCategories } = CategoriesHooks;
  const { data } = useCategories();
  const ReturnCats = (arr) => {
    if (arr) {
      let cats = [];
      for (let i = 0; i < 10; i++) {
        if (arr[i] != null) {
          cats.push(
            <Link
              style={{ ...onCat }}
              key={arr[i].id}
              to={`/category/${arr[i].id}`}
            >
              <ImageContainer>
                <ImageCircle
                  bg={colorsRandomly[Math.floor(Math.random() * 10)]}
                >
                  <Image src={arr[i].image_url} />
                </ImageCircle>
              </ImageContainer>
              <TextContainer>{arr[i].title}</TextContainer>
            </Link>
          );
        }
      }
      return cats;
    }
  };
  return (
    <Container>
      <Wrapper>{ReturnCats(data?.data)}</Wrapper>
    </Container>
  );
};

export default CategoryLine;
