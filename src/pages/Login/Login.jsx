import styled from "styled-components";
import { Link } from "react-router-dom";
import useLoginPage from "./Logic";
import { Oval } from "react-loader-spinner";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockPersonIcon from "@mui/icons-material/LockPerson";

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
    <Grid
      container
      component="main"
      sx={{ maxWidth: "500px", margin: "0 auto", padding: "3rem 1rem" }}
    >
      <Grid sx={{ mx: "auto", mb: 4 }}>
        <Link to={"/"} className="default_anchor">
          <Logo>ECOMMERCE.</Logo>
        </Link>
      </Grid>
      <Grid item xs={12} component={Paper} elevation={6}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockPersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              placeholder="Email Adress"
              name="email"
              type="email"
              value={inputs.email}
              onChange={handleInputChange}
            />
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              placeholder="Password"
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleInputChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
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
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
