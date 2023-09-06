import React, { useEffect, useState } from "react";
import {
  AddressCardContainer,
  AddressDetails,
  AddressInfo,
  AddressTitle,
  EditLink,
  InputGroup,
  Button,
} from "./ProfileStyle";
import { Oval } from "react-loader-spinner";
import { Modal } from "../../components";
import { useForm } from "react-hook-form";
import { cities } from "../../constants";
import { UserHooks } from "../../Features";

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
          <InputGroup>
            <label>Address</label>
            <input type="text" {...register("address", { required: true })} />
            {errors.address && (
              <p style={{ color: "red" }}>This field is required</p>
            )}
          </InputGroup>
          <InputGroup>
            <label>Zip</label>
            <input
              type="text"
              {...register("postal_code", { required: true })}
            />
            {errors.postal_code && (
              <p style={{ color: "red" }}>This field is required</p>
            )}
          </InputGroup>
          <InputGroup>
            <label>City</label>
            <select {...register("city", { required: true })}>
              <option value="">Select a city</option>
              {cities.map((city, i) => {
                return (
                  <option key={i} value={city}>
                    {city}
                  </option>
                );
              })}
            </select>
            {errors.city && (
              <p style={{ color: "red" }}>This field is required</p>
            )}
          </InputGroup>
          <div className="d-flex j-center a-center">
            <Button>
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
