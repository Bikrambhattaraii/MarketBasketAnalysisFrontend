import React from 'react'
import { useNavigate } from "react-router-dom";
import { protectedApi,api } from "../config/axios.js";
import { useEffect } from "react";
const Home = () => {
  //temprory - todo - change to redux
  const navigate = useNavigate();
  
  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        navigate("/guest/login");
        return;
      }

      try {
        const res = await protectedApi.get("/auth/all");
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    checkToken();

    const interval = setInterval(
      () => {
        protectedApi.get("/auth/refresh").then((res) => {
          const token = res.data.accessToken;
          console.log(token);
          localStorage.removeItem("accessToken");
          localStorage.setItem("accessToken", token);
        });
      },18000000); //every 5 hrs

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Market Basket analysis </h1>
    </div>
  );
}

export default Home
