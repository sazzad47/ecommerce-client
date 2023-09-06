import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ProductContext } from "../../pages/ProductDetails/ProductDetails";
import styled from "styled-components";
import parse from "html-react-parser";
const TabsContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  margin: 10px auto;
`;

const PropTableLine = styled.div`
  padding: 5px;
  cont-color: #00000070;
`;

const DescriptionDiv = styled.div`

  img {
    max-width: 100%; 
    height: auto; 
    margin: 10px auto; 
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
    border-radius: 8px;
  }
`;

const PTabs = () => {
  const { productData } = useContext(ProductContext);
  return (
    <TabsContainer>
      <Tabs>
        <TabList>
          <Tab>Product Description</Tab>
          <Tab>Product Props</Tab>
        </TabList>

        <TabPanel>
          <DescriptionDiv className="d-flex-column j-center a-center g-0">
            {parse(productData?.description || "")}
          </DescriptionDiv>
        </TabPanel>
        <TabPanel>
          <div style={{ padding: "0px 50px" }}>
            <h2>Specifications</h2>
            <div className="w-100 d-flex fl-wrap g-20">
              <div className="w-48 d-flex-column proptable">
                {productData?.properties.map((prop, i) => {
                  if (i == 0 || i % 2 == 0) {
                    // this code to change the color when redner properties
                    return (
                      <PropTableLine
                        key={prop.name + prop.value}
                        className="w-100 d-flex"
                      >
                        <span className="fl-1">{prop.name}</span>
                        <span className="fl-1">{prop.value}</span>
                      </PropTableLine>
                    );
                  }
                })}
              </div>
              <div className="w-48 d-flex-column proptable">
                {productData?.properties.map((prop, i) => {
                  if (i % 2 != 0) {
                    return (
                      <PropTableLine
                        key={prop.name + prop.value}
                        className="w-100 d-flex"
                      >
                        <span className="fl-1">{prop.name}</span>
                        <span className="fl-1">{prop.value}</span>
                      </PropTableLine>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </TabsContainer>
  );
};

export default PTabs;
