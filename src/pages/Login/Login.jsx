import styled from "styled-components";
import { colorsPalette } from "../../constants";
import Wave from "react-wavify";
import { mobile, tablet } from "../../responsive";
import { Link } from "react-router-dom";
import useLoginPage from "./Logic";
import { Oval } from "react-loader-spinner";
import { TextField } from "@mui/material";
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

const Wrapper = styled.div`
  max-width: 100%;
  width: 500px;
  background-color: white;
  background-image: linear-gradient(-227deg, #E3FDF5 50%, #FFE6FA 50%);
  ${mobile({
    backgroundImage: "linear-gradient(-237deg, #E3FDF5 50%, #FFE6FA 50%)",
  })}

  ${tablet({
    backgroundImage: "linear-gradient(-237deg, #E3FDF5 50%, #FFE6FA 50%)",
  })}
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

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: ${colorsPalette["4"]};
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  color: black;
  margin: 12px auto;
`;
const LinkWrapper = styled.span`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const { inputs, handleInputChange, handleSubmit, isError, isLoading } =
    useLoginPage();
  return (
    <Container>
      <Link to={"/"} className="default_anchor">
        <Logo>ECOMMERCE.</Logo>
      </Link>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
        <Title>SIGN IN</Title>
          <TextField
            variant="filled"
            placeholder="Email Adress"
            name="email"
            type="email"
            value={inputs.email}
            onChange={handleInputChange}
          />
          <TextField
            variant="filled"
            placeholder="password"
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleInputChange}
          />
          <Button type="submit">
            {isLoading && !isError ? (
              <Oval color="white" width={20} height={20} />
            ) : (
              "Log in"
            )}
          </Button>
          <LinkWrapper>
            <Link to={"/register"} className="default_anchor">
              CREATE A NEW ACCOUNT
            </Link>
          </LinkWrapper>
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

export default Login;
