import { useState, useEffect } from "react";
import Validations from "../../helpers/validations";
import { NotificationManager } from "react-notifications";
import { UserHooks } from "../../Features";
const useLoginPage = () => {
  const { useLogin } = UserHooks;
  const { error, isError, isLoading, mutate } = useLogin();
  const [inputs, setInputs] = useState({
    password: "",
    email: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isError) {
      NotificationManager.error(error.response.data.msg);
    }
  }, [isError]);

  const ValidEmail = Validations.EmailAddress(inputs.email);
  const NotEmpty =
    Validations.NotEmpty(inputs.email) && Validations.NotEmpty(inputs.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!NotEmpty) {
      NotificationManager.error("Feilds cannot be empty");
      return;
    }
    if (!ValidEmail) {
      NotificationManager.error("Not a valid email");
      return;
    }
    mutate({ ...inputs });
  };
  return {
    inputs,
    handleInputChange,
    handleSubmit,
    isError,
    isLoading,
  };
};
export default useLoginPage;
