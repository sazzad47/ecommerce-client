import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  width: 150px;
`;

const Quantity = ({ min, max, value, change }) => {
  const createArray = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
  return (
    <div className="d-flex g-10 j-start a-center">
      <label htmlFor="Quantity">Quantity:</label>
      <Select
        id="Quantity"
        name="Quantity"
        defaultValue={value}
        onChange={(e) => change(e.target.value)}
      >
        {React.Children.toArray(
          createArray(min, max).map((number) => {
            return (
              <option key={number} value={number}>
                {number}
              </option>
            );
          })
        )}
      </Select>
    </div>
  );
};

export default Quantity;
