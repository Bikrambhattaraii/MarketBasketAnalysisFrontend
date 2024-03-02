import { FaUserNinja, FaEnvelope, FaLock } from "react-icons/fa6";
import "../styles/signUp.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [countryCode, setCountryCode] = useState("+1");
  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [shopName, setShopname] = useState("");
  const [address, setAdress] = useState("");
  const [image, setImage] = useState(null);
  const [ownerName, setOwnerName] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
  });
  const fetchUsers = () => {
    axios
      .get("localhost:8000/api/auth/register")
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
      .post("localhost:8000/api/auth/register", { email, username, password })
      .then(() => {
        alert("Registration success");
        setEmail("");
        setUsername("");
        setPassword("");
        setAdress("");
        setOwnerName("");
        setShopname("");
        setImage("");
        fetchUsers();
        Navigate("/login");
      })
      .catch((error) => {
        console.error("Error registering user:", error.message);
      });
  };
  const handleImageChange = (event) => {
    setShopLogo(event.target.files[0]);
  };

  return (
    <>
      <div className="container-signup">
        <h3>Sign Up</h3>
        <div className="signup-container-form">
          <form onSubmit={handleRegister}>
            <div className="username-container">
              <label> Name:</label>

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
              <label>Email</label>{" "}
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
              <label>Password </label>{" "}
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

            <div>
              <label htmlFor="shopName">Shop name:</label>
              <input
                type="text"
                id="shop_name"
                name="shop_name"
                value={shopName}
                placeholder="Your shop name"
                onChange={(e) => {
                  setShopname(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="ownerName">Owner Name:</label>{" "}
              <input
                type="text"
                id="owner_name"
                name="owner_name"
                value={ownerName}
                placeholder="Shop Owner name"
                onChange={(e) => {
                  setOwnerName(e.target.value);
                }}
              />
            </div>
            <div className="image-upload-container">
              <label>Shop Logo:</label>
              <input
                type="file"
                accept="image/*"
                id="shop_logo"
                name="shop_logo"
                value={image}
                onChange={handleImageChange}
              />
            </div>
            <div className="phone-number-container">
              <label htmlFor="phone">Phone Number:</label>
              <select
                id="countryCode"
                name="countryCode"
                value={countryCode}
                onChange={handleCountryCodeChange}
              >
                <option value="+1">+1 (USA)</option>
                <option value="+91">+91 (India)</option>
                <option value="+977">+977(Nepal)</option>
              </select>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                placeholder="enter Owner address"
                name="address"
                id="address"
                value={address}
                onChange={(e) => {
                  setAdress(e.target.value);
                }}
              />
            </div>

            <button className="btn-register" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
