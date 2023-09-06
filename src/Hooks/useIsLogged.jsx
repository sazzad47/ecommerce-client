import { useSelector } from "react-redux";
import { selectUser } from "../Features/Users/state";

// Custom hook to determine if a user is logged in
const useIsLogged = () => {
  // Get the user data from the Redux store using the 'selectUser' selector
  const { user } = useSelector(selectUser);

  // Return an object containing information about the user's login status
  return {
    // 'logged' property indicates if a user is logged in (using double negation to convert to boolean)
    logged: !!user,

    // 'user' property holds the user object or null if not logged in
    user,
  };
};

// Export the custom hook for use in other components
export default useIsLogged;
