import { useState } from "react";
import "../styles/dataupload.css";
import { SlEnergy } from "react-icons/sl";
import { useStateContext } from "../context/ContextProvider";
import { protectedApi } from "../config/axios.js";

const DataUpload = () => {
  const { user } = useStateContext();
  const [formData, setFormData] = useState({
    min_support: null,
    min_confidence: null,
    title: "",
  });
  const [dfile, setDfile] = useState(null);

  const handleInputChnage = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await protectedApi.post(
        "/analysis/upload",
        { ...formData, userId: user.id, dfile },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container-dataupload">
      <h2>Perform Market Basket Analysis</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Give a title to Dataset/Transaction</label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="i.e Dataset 1 (must be unique)"
            value={formData.title}
            onChange={handleInputChnage}
          />
        </div>
        <div className="form-group">
          <label htmlFor="file-upload" className="file-upload-label">
            Select the transactions file (csv file)
          </label>
          <input
            id="file-upload"
            name="dfile"
            type="file"
            onChange={(e) => setDfile(e.target.files[0])}
            accept=".csv"
          />
        </div>
        <div className="form-group">
          <label htmlFor="min-confidence">Minimum Confidence</label>
          <input
            id="min-confidence"
            type="number"
            name="min_confidence"
            placeholder="recommended 0.8 i.e 80% (0.0 to 1.0)"
            min="0"
            max="1.0"
            step="0.01"
            value={formData.min_confidence}
            onChange={handleInputChnage}
          />
        </div>
        <div className="form-group">
          <label htmlFor="support">Minimum Support</label>
          <input
            id="support"
            type="number"
            min="0"
            placeholder="decimal value"
            name="min_support"
            value={formData.min_support}
            onChange={handleInputChnage}
          />
        </div>

        <button type="submit">
          Perform Analysis <SlEnergy color="yellow" fontSize={20} />
        </button>
      </form>
    </div>
  );
};
export default DataUpload;
