import styled from "styled-components";
import { Link } from "react-router-dom";
import useRegistration from "./Logic";
import ValidateSentence from "./ValidateSentence";
import Validations from "../../helpers/validations";
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";

const Logo = styled.h1`
  font-weight: bold;
  color: black;
  margin: 12px auto;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Register = () => {
  const [isPasswordValidationVisible, setPasswordValidationVisible] =
    useState(false);
  const [
    isConfirmPasswordValidationVisible,
    setConfirmPasswordValidationVisible,
  ] = useState(false);
  const { handleInputChange, inputs, handleSubmit, isLoading, isError } =
    useRegistration();
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
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            CREATE AN ACCOUNT
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
              placeholder="First Name"
              name="firstName"
              value={inputs.firstName}
              onChange={handleInputChange}
            />
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              placeholder="Last Name"
              name="lastName"
              value={inputs.lastName}
              onChange={handleInputChange}
            />
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              placeholder="Email"
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleInputChange}
            />
            <div style={{ position: "relative", width: "100%" }}>
              <TextField
                variant="standard"
                margin="normal"
                fullWidth
                placeholder="Password"
                type="password"
                name="password"
                value={inputs.password}
                onChange={handleInputChange}
                onFocus={() => setPasswordValidationVisible(true)}
                onBlur={() => setPasswordValidationVisible(false)}
              />
              {isPasswordValidationVisible && (
                <Paper
                  style={{ position: "absolute", zIndex: 1, top: "4rem" }}
                  className="w-100"
                >
                  <div
                    style={{ padding: "1rem", flexDirection: "column" }}
                    className="d-flex g-15 j-start a-start"
                  >
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
                  </div>
                </Paper>
              )}
            </div>
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              value={inputs.confirmPassword}
              onChange={handleInputChange}
              onFocus={() => setConfirmPasswordValidationVisible(true)}
              onBlur={() => setConfirmPasswordValidationVisible(false)}
            />
            {isConfirmPasswordValidationVisible && (
              <ValidateSentence
                sentence={"Passwords should match"}
                expression={
                  inputs.password != "" &&
                  inputs.confirmPassword != "" &&
                  inputs.password === inputs.confirmPassword
                }
              />
            )}

            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              placeholder="Phone"
              type="text"
              name="phone"
              value={inputs.phone}
              onChange={handleInputChange}
            />
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
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
              variant="standard"
              margin="normal"
              fullWidth
              placeholder="Address"
              type="text"
              name="address"
              value={inputs.address}
              onChange={handleInputChange}
            />
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              placeholder="Zip"
              type="text"
              name="postal_code"
              value={inputs.postal_code}
              onChange={handleInputChange}
            />
            <div className="d-flex-column">
              <Agreement>
                By creating an account, I consent to the processing of my
                personal data in accordance with the{" "}
                <Link to="/policy">
                  {" "}
                  <b>PRIVACY POLICY</b>{" "}
                </Link>
              </Agreement>
             
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              {isLoading && !isError ? (
                <Oval color="white" width={20} height={20} />
              ) : (
                "Create"
              )}
            </Button>
            <Link
                style={{ fontSize: "12px" }}
                className="anchor_underline"
                to={"/login"}
              >
                Have an account ? click here
              </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
