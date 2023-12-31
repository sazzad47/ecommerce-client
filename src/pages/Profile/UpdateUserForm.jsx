import React, { useEffect } from "react";
import { UserHooks } from "../../Features";
import { useForm } from "react-hook-form";
import { NotificationManager } from "react-notifications";
import { Oval } from "react-loader-spinner";
import { Button, Grid, TextField } from "@mui/material";

const UpdateUserForm = () => {
  const { useUserDetails, useUserManipulation } = UserHooks;
  const { user } = useUserDetails();
  const { updateUserLoading, updateUserMutation, updateUserSuccess } =
    useUserManipulation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: user?.name?.split(" ")[0] || "",
      last_name: user?.name?.split(" ")[1] || "",
      phone: user?.phone,
      email: user?.email,
    },
  });

  useEffect(() => {
    if (updateUserSuccess) {
      NotificationManager.success("Information updated successfully");
    }
  }, [updateUserLoading, updateUserSuccess]);

  const onSubmit = (data) => {
    updateUserMutation({ ...data, user_id: user.id });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item sx={12} md={6}>
          <TextField
            fullWidth
            variant="standard"
            label="First Name"
            type="text"
            {...register("first_name", { required: true })}
          />
          {errors.first_name && (
            <span className="error-message">This field is required.</span>
          )}
        </Grid>
        <Grid item sx={12} md={6}>
          <TextField
            fullWidth
            variant="standard"
            label="Last Name"
            type="text"
            {...register("last_name", { required: true })}
          />
          {errors.last_name && (
            <span className="error-message">This field is required.</span>
          )}
        </Grid>
        <Grid item sx={12} md={6}>
          <TextField
            fullWidth
            variant="standard"
            label="Phone"
            type="number"
            {...register("phone", {
              required: "this field is required",
              pattern: {
                value: /^(?:\+44|0)[1-9]\d{8,9}$/,
                message: "Phone number is not valid",
              },
            })}
          />

          {errors.phone && (
            <span className="error-message">{errors.phone.message}</span>
          )}
        </Grid>
        <Grid item sx={12} md={6}>
          <TextField
            fullWidth
            variant="standard"
            label="Email"
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            })}
          />
          {errors.email && (
            <span className="error-message">
              {errors.email.type === "required"
                ? "This field is required."
                : "Please enter a valid email address."}
            </span>
          )}
        </Grid>
      </Grid>

      <Button sx={{mt: 3}} variant="contained" color="primary" >
        {updateUserLoading ? (
          <Oval color="white" width={20} height={20} />
        ) : (
          "Update"
        )}
      </Button>
    </form>
  );
};

export default UpdateUserForm;
