
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";


const Home = () => {
  //temprory - todo - change to redux
  const navigate = useNavigate();
  const { user } = useStateContext();

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
