export const Logout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};
