import { useState, useEffect } from "react";
import "../styles/Login.css";
import axios from "axios";
import LoginImage from "../assets/image/login.png";

import { useNavigate } from "react-router-dom";
const Login = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("http://localhost:3001/register").then((res) => {
      console.log(res.data);
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      const token = response.data.token;
      alert("Login successful");
      setUsername("");
      setPassword("");
      fetchUsers();
      navigate("/guest");
      window.location.reload();
      localStorage.setItem("token", token);
    } catch (error) {
      console.log("Login Error", error);
    }
  };
  const handleRegisterClick = () => {
    console.log("Register link clicked");
    navigate("/signup");
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
            <form action="" onSubmit={handleLogin}>
              <div>
                <input
                  type="username"
                  placeholder="username"
                  className="form-input"
                  value={username}
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                {" "}
                <input
                  type="password"
                  placeholder="Password"
                  className="form-input"

                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn-signin" type="submit">
                login{" "}
              </button>
              <p>forgot <a href="#">username</a>/ <a href="#">password</a></p>
            </form>
            
          </div>{" "}
        </div>
      </div>
    </>
  );
};
export default Login;
