import { Checkbox, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Navbar2 from "../Components/common/Navbar/NavbarLite";
import Form from "../Components/SignIn/form";
import { AuthContext } from "../Context/AuthContext";
import "../styles/signin.css";

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
        // console.log(res);
        loginUser("eve.holt@reqres.in", res.token);
      });
  };
  if (isAuth) {
    return <Navigate to="/checkout" />;
  }
  return (
    <div>
      <Navbar2 />
      <br />
      <div className="signin-main-div">
        <div className="signin-sub-div" style={{ padding: "0 8%",borderRight: '1px solid grey' }}>
          <Text className="signin-head">Sign in</Text>
          <img
            src="https://drive.google.com/uc?export=view&id=16gOlkVRauErig1ypvf8vCH-3_myXrJcC"
            alt="16gOlkVRauErig1ypvf8vCH-3_myXrJcC"
          />
          {/* https://drive.google.com/file/d/16gOlkVRauErig1ypvf8vCH-3_myXrJcC/view?usp=sharing */}
          <Text className="signin-text">
            Your sign-in info is now the same at Nordstrom and Nordstrom Rack.
          </Text>

          <Form />

          <Text
            _hover={{ cursor: "pointer" }}
            color={"#00819d"}
            textDecoration={"underline"}
            fontSize="15px"
            textAlign="left"
            margin={"1rem 0"}
          >
            Forgot password?
          </Text>
          <div className="signin-checkbox">
            <Checkbox colorScheme="gray" iconColor={"white"}>
              Keep me Signed in
            </Checkbox>
          </div>
          <Text className="signin-text">
            By signing in to your account, you agree to our{" "}
            <span className="signin-span-text">Privacy Policy</span> and{" "}
            <span className="signin-span-text">Terms & Conditions</span>.
          </Text>
          <button onClick={handleLogin} className="sign-in-btn">Sign In & Check Out</button>
        </div>
        <div className="signin-sub-div" style={{ padding: "0 7%" }}>
          <Text className="signin-head">Guest</Text>
          <Text className="signin-text">
            You can create an account when you check out.
          </Text>
          <div>
            <button className="guest-btn">Guest Checkout</button>
          </div>
          <br />
          <div>
            <button className="paypal-btn">
              <img
                width="120px"
                src="https://freepngimg.com/save/13626-paypal-logo-png/2272x864"
                alt="PayPal logo"
              />
            </button>
          </div>
        </div>
      </div>
      <br /><br /><br />
      {/* <button onClick={handleLogin}>signin</button> */}
    </div>
  );
}
