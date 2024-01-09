import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/User/userSelectors";

export const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = "/",
}: {
  children: React.ReactElement;
  restricted: boolean;
  redirectTo: string;
}) => {
  const isLogin = useSelector(getIsLoggedIn);
  const shouldRedirect = isLogin && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};
