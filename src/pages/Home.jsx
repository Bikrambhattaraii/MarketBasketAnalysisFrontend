import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";

const Home = () => {
  // Temporary - todo - change to redux
  const navigate = useNavigate();
  const { user ,energyCount } = useStateContext();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#2ecc71",
          fontWeight: "bolder",
          color: "black",
          padding: "70px",
          borderRadius: "5px",
        }}
      >
        Total Energy: <strong>{energyCount}</strong>
      </div>
      <div
        style={{
          backgroundColor: "#2ecc71",
          fontWeight: "bolder",
          color: "black",
          padding: "70px",
          borderRadius: "5px",
        }}
      >
        Total Analysis Done: <strong>test</strong>
      </div>
    </div>
  );
};

export default Home;
