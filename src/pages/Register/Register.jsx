import styled from "styled-components";
import { colorsPalette, cities } from "../../constants";
import Wave from "react-wavify";
import { mobile, tablet } from "../../responsive";
import { Link } from "react-router-dom";
import useRegistration from "./Logic";
import ValidateSentence from "./ValidateSentence";
import Validations from "../../helpers/validations";
import { Oval } from "react-loader-spinner";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: black;
  margin: 12px auto;
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: white;
  ${mobile({
    width: "95%",
  })}

  ${tablet({
    width: "90%",
  })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Select = styled.select`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
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
  const { handleInputChange, inputs, handleSubmit, isLoading, isError } =
    useRegistration();
  return (
    <Container>
      <Link to={"/"} className="default_anchor">
        <Logo>ECOMMERCE.</Logo>
      </Link>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="first name"
            name="firstName"
            value={inputs.firstName}
            onChange={handleInputChange}
          />
          <Input
            placeholder="last name"
            name="lastName"
            value={inputs.lastName}
            onChange={handleInputChange}
          />
          <Input
            placeholder="password"
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleInputChange}
          />
          <Input
            placeholder="confirm password"
            type="password"
            name="confirmPassword"
            value={inputs.confirmPassword}
            onChange={handleInputChange}
          />
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
          <Input
            placeholder="email"
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Phone"
            type="text"
            name="phone"
            value={inputs.phone}
            onChange={handleInputChange}
          />
          <Select name="city" value={inputs.city} onChange={handleInputChange}>
            <option value="">Select city</option>
            {cities.map((city, i) => {
              return (
                <option key={i} value={city}>
                  {city}
                </option>
              );
            })}
          </Select>
          <Input
            placeholder="Address"
            type="text"
            name="address"
            value={inputs.address}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Zip"
            type="text"
            name="postal_code"
            value={inputs.postal_code}
            onChange={handleInputChange}
          />
          <div className="d-flex-column mb-3">
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
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
        </Form>
        <Wave fill="url(#gradient)">
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor={colorsPalette["4"]} />
              <stop offset="90%" stopColor={colorsPalette["5"]} />
            </linearGradient>
          </defs>
        </Wave>
      </Wrapper>
    </Container>
  );
};

export default Register;
