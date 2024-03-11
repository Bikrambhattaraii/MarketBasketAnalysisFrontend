import { useState, useEffect } from "react";
import "../styles/Login.css";
import { api as apiCall } from "../config/axios.js";
import LoginImage from "../assets/image/login.png";
 import { ToastContainer } from "react-toastify";
import { useStateContext } from "../context/ContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils/toast.js";

const Login = () => {
  const { settingUser, settingToken, toastMessage, settingToastMessage,settingEnergyCount } =
    useStateContext();

  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setLoginCred({
      ...loginCred,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await apiCall.post("/auth/login", loginCred);
      if (response.data.success === true) {
        const {accessToken,authUser} = response.data;
        settingUser(authUser);
        settingToken(accessToken);
        settingEnergyCount(authUser.Energy.energy_count);
        settingToastMessage("Login Successfull");
        navigate("/home/dashboard");
      } else {
        // console.log(response.data)
        handleError(response.data.message);
      }
    } catch (error) {
      handleError(error.message);
    }
  };

  return (
    <>
      <div className="container-signin">
        <div className="form-container">
          <div className="left-container-signin">
            <img src={LoginImage} alt="" />
          </div>
          <div className="right-container-signin">
            <h3>Member Login</h3>
            <form onSubmit={handleLogin}>
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="form-input"
                  value={loginCred.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                {" "}
                <input
                  type="password"
                  placeholder="Password"
                  className="form-input"
                  name="password"
                  id="password"
                  onChange={handleInputChange}
                />
              </div>
              <button className="btn-signin" type="submit">
                login{" "}
              </button>
              <Link to="/guest/register">Register</Link>
              <p>
                forgot <a href="#">username</a>/ <a href="#">password</a>
              </p>
            </form>
          </div>{" "}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
export default Login;
