import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    }, [navigate]);

    return <>{token ? <Component {...props} /> : <div>loading</div>}</>;
  };
};

export default withAuth;
