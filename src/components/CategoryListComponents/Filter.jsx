import React, { useContext, createContext, useState } from "react";
import styled from "styled-components";
import DiscountFilter from "./FiltersComponents/DiscountFilter";
import PriceFilter from "./FiltersComponents/PriceFilter";
import RatingFilter from "./FiltersComponents/RatingFilter";
import TextFilter from "./FiltersComponents/TextFilter";
import { CategoryContext } from "../../pages/CategoryList/CategoryList";
import { colorsPalette } from "../../constants";
import { CategoriesHooks } from "../../Features";
import { useParams } from "react-router";
const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const FilterHeader = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ApplyButton = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  background-color: ${colorsPalette[4]};
  color: white;
  cursor: pointer;
`;

const ResetButton = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  background-color: ${colorsPalette[3]};
  color: black;
  cursor: pointer;
`;

export const FilterContext = createContext();

const Filter = () => {
  const { id } = useParams();
  const { props } = useContext(CategoryContext);
  const [filter, setFilter] = useState({});
  const { useCategoryList } = CategoriesHooks;
  const { ProductsRefetch } = useCategoryList(id, filter);
  const handleApplyingFilter = () => {
    ProductsRefetch();
  };

  const asyncState = () => {
    return new Promise((resolve, reject) => {
      setFilter({});
      resolve();
    });
  };

  const handleReset = () => {
    asyncState().then(() => {
      ProductsRefetch();
    });
  };

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      <Container>
        <FilterHeader className="d-flex">
          <p>Filter</p>
          <div className="d-flex g-10">
            <ApplyButton onClick={() => handleApplyingFilter()}>
              Apply
            </ApplyButton>
            <ResetButton onClick={() => handleReset()}>Reset</ResetButton>
          </div>
        </FilterHeader>
        <Wrapper>
          {props?.map((prop) => {
            return (
              <>
                {(prop.type == "TEXT" || prop.type == "COLOR") && (
                  <TextFilter
                    title={prop.name}
                    key={prop.id}
                    id={prop.id}
                    type={prop.table_name}
                  />
                )}
              </>
            );
          })}
          {/* <PriceFilter /> */}
          {/* <RatingFilter /> */}
          {/* <DiscountFilter /> */}
        </Wrapper>
      </Container>
    </FilterContext.Provider>
  );
};

export default Filter;
