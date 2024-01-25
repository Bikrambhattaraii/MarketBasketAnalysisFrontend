import { FaUserNinja, FaEnvelope, FaLock } from "react-icons/fa6";
import "../styles/signUp.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
  });
  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/register")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error.message);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/register", { email, username, password })
      .then(() => {
        alert("Registration success");
        setEmail("");
        setUsername("");
        setPassword("");
        fetchUsers();
        Navigate("/login");
      })
      .catch((error) => {
        console.error("Error registering user:", error.message);
      });
  };

  return (
    <>
      <div className="container-signup">
        <div className="signup-container-form">
          <h3>Sign Up</h3>
          <form onSubmit={handleRegister}>
            <div className="username-container">
            
              <input
                type="text"
                placeholder="enter your username"
                name="username"
                className="inputs-signup"
                value={username}
                id="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="email-container">
              <span>
            
              </span>{" "}
              <input
                type="email"
                placeholder="enter your  email"
                name="email"
                className="inputs-signup"
                value={email}
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="password-container">
              
              <input
                type="password"
                placeholder="enter your passowrd"
                className="inputs-signup"
                value={password}
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
