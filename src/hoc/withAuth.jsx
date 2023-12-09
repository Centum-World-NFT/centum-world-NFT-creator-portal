import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "../pages/homepage/Homepage";

const withAuth = (Component) => {
  return function ProtectedRoute(props) {
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("access_token");
      if (token) {
        setToken(true);
      } else {
        navigate("/");
      }
    }, []);

    return <>{token ? <Component {...props} /> : <HomePage/>}</>;
  };
};

export default withAuth;
