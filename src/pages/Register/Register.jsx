import styled from "styled-components";
import { colorsPalette } from "../../constants";
import Wave from "react-wavify";
import { mobile, tablet } from "../../responsive";
import { Link } from "react-router-dom";
import useRegistration from "./Logic";
import ValidateSentence from "./ValidateSentence";
import Validations from "../../helpers/validations";
import { Oval } from "react-loader-spinner";
import { TextField } from "@mui/material";
import { useState } from "react";
const Container = styled.div`
  min-height: 100vh;
  padding: 3rem 1rem;
  background-size: cover;
  display: flex;
  align-items: center;
  ${mobile({
    justifyContent: "flex-start",
  })}

  ${tablet({
    justifyContent: "flex-start",
  })}
justify-content: center;
  flex-direction: column;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: black;
  margin: 12px auto;
`;

const Wrapper = styled.div`
  max-width: 100%;
  width: 500px;
  background-color: #e3fdf5;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: ${colorsPalette["4"]};
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const Register = () => {
  const [isValidationVisible, setValidationVisible] = useState(false);
  const { handleInputChange, inputs, handleSubmit, isLoading, isError } =
    useRegistration();
  return (
    <Container>
      <Link to={"/"} className="default_anchor">
        <Logo>ECOMMERCE.</Logo>
      </Link>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Title>CREATE AN ACCOUNT</Title>
          <TextField
            variant="filled"
            placeholder="first name"
            name="firstName"
            value={inputs.firstName}
            onChange={handleInputChange}
          />
          <TextField
            variant="filled"
            placeholder="last name"
            name="lastName"
            value={inputs.lastName}
            onChange={handleInputChange}
          />
          <TextField
            variant="filled"
            placeholder="password"
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleInputChange}
            onFocus={()=> setValidationVisible(true)}
            onBlur={()=> setValidationVisible(false)}
          />
          <TextField
            variant="filled"
            placeholder="confirm password"
            type="password"
            name="confirmPassword"
            value={inputs.confirmPassword}
            onChange={handleInputChange}
            onFocus={()=> setValidationVisible(true)}
            onBlur={()=> setValidationVisible(false)}
          />
          {
            isValidationVisible &&
          <div className="w-100 d-flex f-wrap g-15 j-start a-start pad-10">
            <ValidateSentence
              sentence={"Password should be at least 8 characters"}
              expression={Validations.Length8(inputs.password)}
            />
            <ValidateSentence
              sentence={"Password should contains capital letters"}
              expression={Validations.CapitalLetter(inputs.password)}
            />
            <ValidateSentence
              sentence={"Password should contains small letters"}
              expression={Validations.SmallLetter(inputs.password)}
            />
            <ValidateSentence
              sentence={"Password should contains special characters"}
              expression={Validations.SpecialChar(inputs.password)}
            />
            <ValidateSentence
              sentence={"Passwords should match"}
              expression={
                inputs.password != "" &&
                inputs.confirmPassword != "" &&
                inputs.password === inputs.confirmPassword
              }
            />
          </div>
          }
          <TextField
            variant="filled"
            placeholder="email"
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleInputChange}
          />
          <TextField
            variant="filled"
            placeholder="Phone"
            type="text"
            name="phone"
            value={inputs.phone}
            onChange={handleInputChange}
          />
          <TextField
            variant="filled"
            placeholder="City"
            type="text"
            name="city"
            value={inputs.city}
            onChange={handleInputChange}
          />
          {/* <Select name="city" value={inputs.city} onChange={handleInputChange}>
            <option value="">Select city</option>
            {cities.map((city, i) => {
              return (
                <option key={i} value={city}>
                  {city}
                </option>
              );
            })}
          </Select> */}
          <TextField
            variant="filled"
            placeholder="Address"
            type="text"
            name="address"
            value={inputs.address}
            onChange={handleInputChange}
          />
          <TextField
            variant="filled"
            placeholder="Zip"
            type="text"
            name="postal_code"
            value={inputs.postal_code}
            onChange={handleInputChange}
          />
          <div className="d-flex-column mb-3">
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <Link to="/policy"> <b>PRIVACY POLICY</b> </Link>
            </Agreement>
            <Link
              style={{ fontSize: "12px" }}
              className="anchor_underline"
              to={"/login"}
            >
              Have an account ? click here
            </Link>
          </div>
          <Button>
            {isLoading && !isError ? (
              <Oval color="white" width={20} height={20} />
            ) : (
              "Create"
            )}
          </Button>
          <Wave fill="url(#gradient)">
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="10%" stopColor={colorsPalette["4"]} />
                <stop offset="90%" stopColor={colorsPalette["5"]} />
              </linearGradient>
            </defs>
          </Wave>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
