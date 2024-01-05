import { Navigate } from "react-router-dom";

const Logout = () => {
  localStorage.removeItem("member");
  return <Navigate to="/" />;
};

export default Logout;
