import { useEffect, useState } from "react";
import { protectedApi } from "../config/axios";
import { useStateContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";
import { handleSuccess } from "../utils/toast";
const History = () => {
  const [allData, setAllData] = useState([]);
  // const [clickedResult,setClickedResult] = useState(null);
  const { user } = useStateContext();
  useEffect(() => {
    const getAllData = async () => {
      try {
        const response =await protectedApi.get(`/analysis/allAnalysis/${user.id}`);
        if (response.data.success === true) {
          setAllData(response.data.historyData);
        }
      } catch (err) {
        //console.log(err)
      }
    };
    getAllData();
  }, []);

  const handelDelete =async (id) =>{
    try{
      const res = await protectedApi.delete(`/analysis/delete/${id}`);
      if(res.data.success === true){
        handleSuccess(res.data.message);
        setAllData((prev)=>prev.filter(item=>item.id !== id));
      }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <h2>History</h2>
      {allData.length == 0 ? (
        <p>No history Data</p>
      ) : (
        <>
          <div style={{ padding: "20px" }}>
            {allData.map((data) => (
              <>
                <div
                  key={data.id}
                  style={{
                    margin: "20px",
                    backgroundColor: "#2ecc71",
                    padding: "20px",
                  }}
                >
                  <p style={{color: "white"}}>Dataset Title : {data.title}</p>
                  <br />
                  <button style={{ marginLeft: "10px" }} onClick={()=>handelDelete(data.id)}>Delete</button>
                  <button style={{ marginLeft: "10px" }}><Link to={`/home/detail/${data.id}`}>Show Result</Link></button>
                  <button style={{ marginLeft: "10px" }}>Show Data</button>
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
};
export default History;
9804363784