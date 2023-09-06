import { useState, useEffect } from "react";
import Validations from "../../helpers/validations";
import { NotificationManager } from "react-notifications";
import { UserHooks } from "../../Features";
const useRegistration = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    city: "",
    postal_code: "",
    phone: "+44",
    address: "",
  });
  const { useCreateUser } = UserHooks;
  const { mutate, isLoading, error, isError } = useCreateUser();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const PasswordValidations =
    Validations.Length8(inputs.password) &&
    Validations.CapitalLetter(inputs.password) &&
    Validations.SmallLetter(inputs.password) &&
    Validations.SpecialChar(inputs.password) &&
    inputs.password != "" &&
    inputs.confirmPassword != "" &&
    inputs.password === inputs.confirmPassword;

  const EmailValidation = Validations.EmailAddress(inputs.email);
  const PostalCodeValidation = Validations.PostalCode(inputs.postal_code);
  const PhoneNumberValidation = Validations.PhoneNumber(inputs.phone);

  const NotEmpty =
    Validations.NotEmpty(inputs.firstName) &&
    Validations.NotEmpty(inputs.lastName) &&
    Validations.NotEmpty(inputs.confirmPassword) &&
    Validations.NotEmpty(inputs.email) &&
    Validations.NotEmpty(inputs.postal_code) &&
    Validations.NotEmpty(inputs.city) &&
    Validations.NotEmpty(inputs.phone) &&
    Validations.NotEmpty(inputs.address) &&
    Validations.NotEmpty(inputs.password);

  useEffect(() => {
    console.log("Registration");
    if (isError) {
      NotificationManager.error(error.response.data.msg);
    }
  }, [isError]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!NotEmpty) {
      NotificationManager.error("Cannot leave any field empty");
      return;
    }
    if (!PasswordValidations) {
      NotificationManager.error("Password not match our rules");
      return;
    }
    if (!EmailValidation) {
      NotificationManager.error("Wrong email format");
      return;
    }
    if (!PhoneNumberValidation) {
      NotificationManager.error("Wrong phone number format");
      return;
    }
    if (!PostalCodeValidation) {
      NotificationManager.error("Wrong zip code format");
      return;
    }

    mutate({ ...inputs });
  };
  return {
    inputs,
    handleInputChange,
    handleSubmit,
    isLoading,
    isError,
  };
};

export default useRegistration;
