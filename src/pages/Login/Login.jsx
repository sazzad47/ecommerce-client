import styled from "styled-components";
import { colorsPalette } from "../../constants";
import Wave from "react-wavify";
import { mobile, tablet } from "../../responsive";
import { Link } from "react-router-dom";
import useLoginPage from "./Logic";
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
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
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Email Adress"
            name="email"
            type="email"
            value={inputs.email}
            onChange={handleInputChange}
          />
          <Input
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

export default Login;
