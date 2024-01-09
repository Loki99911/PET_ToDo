import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/User/userSelectors";

export const PrivateRoute = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const login = useSelector(getIsLoggedIn);
  return login ? children : <Navigate to="/" />;
};
