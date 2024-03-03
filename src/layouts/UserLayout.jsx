import { Outlet ,useNavigate} from "react-router-dom"
import { protectedApi } from "../config/axios.js";
import { useEffect } from "react";

const UserLayout = () => {

    // const token = localStorage.getItem("accessToken");
    // const navigate = useNavigate();
    // if (!token) {
    //   navigate("/guest/login");
    // }


  return (
    <>
      <div>UserLayout</div>
    <Outlet />  
    </>
    
  )
}
export default UserLayout