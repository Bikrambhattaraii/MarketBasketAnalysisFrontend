import { useState ,useEffect} from "react";
import "../styles/Login.css";
import axios from 'axios';

import { useNavigate } from "react-router-dom";
 const Login = () => {
  const [users, setUsers] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
  });
  const fetchUsers = () => {
    axios.get("http:localhost:5000/register").then((res) => {
      console.log(res.data);
    });
  };
  const handleLogin =async (event)=>{
    event.preventDefault()
    try{
      const response= await axios.post('http://localhost:5000/login',{username,password})
      const token= response.data.token
      setUsername('')
      setPassword('')
      fetchUsers()
      navigate('/account')
      window.location.reload()
      localStorage.setItem('token',token)
    }catch(error){
      console.log('login error')
    }
  }
  return (
    <>
      <div className="container-signin">
        <div className="form-container">
          <h3>Acoount Login</h3>
          <form action="" onSubmit={handleLogin}>
            <input type="username" 
            placeholder="username" 
            className="form-input"
            value={username}
            id="username"
            onChange={(e)=>setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="form-input"
              id="password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button className="btn-signin">SIGN IN </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
