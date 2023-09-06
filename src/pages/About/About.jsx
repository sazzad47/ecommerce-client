import React from "react";
import styled from "styled-components";
import { Layout } from "../../components";
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const AboutHeader = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
`;

const AboutDescription = styled.p`
  font-size: 18px;
  text-align: center;
  color: #666;
  max-width: 800px;
`;

const AboutImage = styled.img`
  max-width: 100%;
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const About = () => {
  return (
    <Layout>
      <AboutContainer>
        <AboutHeader>About Us</AboutHeader>
        <AboutDescription>
          We are a passionate team dedicated to creating innovative solutions
          for your needs. With our expertise and commitment, we strive to
          deliver the best results for our clients.
        </AboutDescription>
        <AboutImage src="https://via.placeholder.com/800x600" alt="About Us" />
      </AboutContainer>
    </Layout>
  );
};

export default About;
