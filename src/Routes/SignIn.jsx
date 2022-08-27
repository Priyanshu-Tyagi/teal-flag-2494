import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const userLogin = ({ email, password }) => {
  return fetch(`https://reqres.in/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

export default function SignIn() {
  const { loginUser, isAuth } = useContext(AuthContext);
  const handleLogin = () => {
    userLogin({
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        loginUser("eve.holt@reqres.in", res.token);
      });
  };
  if (isAuth) {
    return <Navigate to="/checkout" />;
  }
  return (
    <div>
      <h1>signin</h1>
      <button onClick={handleLogin}>signin</button>
    </div>
  );
}
