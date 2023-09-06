import React from "react";
import styled from "styled-components";
import { Layout } from "../../components";
import { colorsPalette } from "../../constants";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactHeader = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const FormLabel = styled.label`
  font-size: 18px;
  color: #666;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
`;

const FormButton = styled.button`
  background-color: ${colorsPalette[5]};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: ${colorsPalette[4]};
  }
`;

const Contact = () => {
  return (
    <Layout>
      <ContactContainer className="mt-4 mb-4">
        <ContactHeader>Contact Us</ContactHeader>
        <ContactForm>
          <FormLabel>Name</FormLabel>
          <FormInput type="text" placeholder="Your Name" />
          <FormLabel>Email</FormLabel>
          <FormInput type="email" placeholder="Your Email" />
          <FormLabel>Message</FormLabel>
          <FormTextarea rows="6" placeholder="Your Message" />
          <FormButton type="submit">Send Message</FormButton>
        </ContactForm>
      </ContactContainer>
    </Layout>
  );
};

export default Contact;
