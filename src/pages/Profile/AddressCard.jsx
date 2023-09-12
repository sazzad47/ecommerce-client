import React, { useEffect, useState } from "react";
import {
  AddressCardContainer,
  AddressDetails,
  AddressInfo,
  AddressTitle,
  EditLink,
} from "./ProfileStyle";
import { Oval } from "react-loader-spinner";
import { Modal } from "../../components";
import { useForm } from "react-hook-form";
import { cities } from "../../constants";
import { UserHooks } from "../../Features";
import { Button, MenuItem, TextField } from "@mui/material";

const AddressCard = ({ address }) => {
  const [show, setShow] = useState(false);
  const { useUserManipulation, useUserDetails } = UserHooks;
  const { user } = useUserDetails();
  const { updateAddressMutation, updateLoading, updateSuccess } =
    useUserManipulation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address: address.address,
      postal_code: address.postal_code,
      city: address.city,
    },
  });

  useEffect(() => {
    if (updateSuccess) {
      setShow(false);
    }
  }, [updateLoading, updateSuccess]);

  const onSubmit = (data) => {
    updateAddressMutation({
      ...data,
      address_id: address.id,
      user_id: user.id,
    });
  };
  return (
    <AddressCardContainer>
      <AddressDetails className="d-flex g-15 a-center">
        <AddressTitle>{address.city}</AddressTitle>
        <AddressInfo>{address.address}</AddressInfo>
        <AddressInfo>{address.postal_code}</AddressInfo>
      </AddressDetails>
      <EditLink className="clear" onClick={() => setShow(true)}>
        Edit
      </EditLink>
      <Modal
        isOpen={show}
        onClose={() => setShow(false)}
        title={"Editting address"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            margin="normal"
            variant="standard"
            fullWidth
            label="Address"
            type="text"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <p style={{ color: "red" }}>This field is required</p>
          )}

          <TextField
            margin="normal"
            variant="standard"
            fullWidth
            label="Zip"
            type="text"
            {...register("postal_code", { required: true })}
          />
          {errors.postal_code && (
            <p style={{ color: "red" }}>This field is required</p>
          )}
          <TextField
            margin="normal"
            variant="standard"
            fullWidth
            select
            label="City"
            {...register("city", { required: true })}
          >
            <MenuItem value="">Select a city</MenuItem>
            {cities.map((city, i) => {
              return (
                <MenuItem key={i} value={city}>
                  {city}
                </MenuItem>
              );
            })}
          </TextField>
          {errors.city && (
            <p style={{ color: "red" }}>This field is required</p>
          )}

          <div className="d-flex j-start a-center">
            <Button sx={{mt: 3}} variant="contained" color="primary" type="submit">
              {updateLoading ? (
                <Oval color="white" width={20} height={20} />
              ) : (
                "Edit"
              )}
            </Button>
          </div>
        </form>
      </Modal>
    </AddressCardContainer>
  );
};

export default AddressCard;
