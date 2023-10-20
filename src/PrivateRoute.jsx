import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import Loading from "./Component/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <>
        <Loading></Loading>
      </>
    );
  } else if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
