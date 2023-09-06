import React, { useEffect } from "react";
import styled from "styled-components";
import { Layout } from "../../components";
import { HomeHooks } from "../../Features";
import parse from "html-react-parser";

const PolicyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const PolicyHeader = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
`;

const PolicyContent = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-size: 16px;
  line-height: 1.6;
  color: #555;
`;

const PolicyPage = () => {
  const { usePages } = HomeHooks;
  const { GetPages, PagesData, PagesLoading } = usePages();

  useEffect(() => {
    GetPages();
  }, []);

  return (
    <Layout>
      <PolicyContainer>
        <PolicyHeader>Privacy & Policy</PolicyHeader>
        {!PagesLoading && (
          <PolicyContent>{parse(PagesData?.data[0].privacy || "")}</PolicyContent>
        )}
      </PolicyContainer>
    </Layout>
  );
};

export default PolicyPage;
