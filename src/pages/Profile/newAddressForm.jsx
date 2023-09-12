import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { cities, colorsPalette } from "../../constants";
import { UserHooks } from "../../Features";
import { Oval } from "react-loader-spinner";
import { Button, MenuItem, TextField } from "@mui/material";
const FormContainer = styled.div`
 
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
`;


const Error = styled.span`
  color: red;
  font-size: 0.8rem;
`;

const NewAddressForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { useUserManipulation, useUserDetails } = UserHooks;
  const { addAddressMutation, addLoading, addSuccess } = useUserManipulation();
  const { user } = useUserDetails();

  useEffect(() => {
    console.log("new address");
    if (addSuccess) {
      reset();
    }
  }, [addLoading, addSuccess]);

  const onSubmit = (data) => {
    addAddressMutation({ ...data, user_id: user.id });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <TextField
            fullWidth
            label="Address"
            variant="standard"
            type="text"
            {...register("address", { required: true })}
          />
          {errors.address && <Error>This field is required</Error>}
        </FormGroup>

        <FormGroup>
          <TextField
            fullWidth
            label="Zip Code"
            variant="standard"
            type="text"
            {...register("postal_code", {
              required: "Zip is required",
              pattern: {
                value:
                  /^(GIR ?0AA|[A-PR-UWYZ](?:\d{1,2}|([A-HK-Y]\d|[A-HK-Y]\d{2}|[A-HK-Y]\d[ABEHMNPRV-Y])) ?\d[ABD-HJLNP-UW-Z]{2})$/,
                message: "Zip code is not valid",
              },
            })}
          />
          {errors.postal_code && <Error>{errors.postal_code.message}</Error>}
        </FormGroup>

        <FormGroup>
          <TextField label="City" variant="standard" select fullWidth {...register("city", { required: true })}>
            <MenuItem value="">Select a city</MenuItem>
            {cities.map((city, i) => {
              return (
                <MenuItem key={i} value={city}>
                  {city}
                </MenuItem>
              );
            })}
          </TextField>
          {errors.city && <Error>Please select a city</Error>}
        </FormGroup>

        <Button variant="contained" color="primary" type="submit">
          {addLoading ? (
            <Oval color="white" width="20px" height="20px" />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </FormContainer>
  );
};

export default NewAddressForm;
