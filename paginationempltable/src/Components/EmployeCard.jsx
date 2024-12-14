import React, { useState, useEffect } from "react";
import EmployeTable from "./EmployeTable";

const CardPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; 

  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
    
    } catch (err) {
      console.error(err)
      alert("Failed to fetch data");
    } 
  };

  const totalPages = Math.ceil(data.length / rowsPerPage); 

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Employee Data Table</h1>
          <EmployeTable
            data={data}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
          />

          <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              style={{
                padding: "10px 20px",
                margin: "0 10px",
                background: currentPage === 1 ? "#ccc" : "rgb(16, 150, 123)",
                color: "white",
                border: "none",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                borderRadius: "5px",
              }}
            >
              Previous
            </button>

            <span style={{ padding: "10px", fontSize: "16px" , background:'rgb(16, 150, 123)', borderRadius:'5px', color:'white'}}>
              {currentPage}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              style={{
                padding: "10px 20px",
                margin: "0 10px",
                backgroundColor: currentPage === totalPages ? "#ccc" : "rgb(16, 150, 123)",
                color: "white",
                border: "none",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                borderRadius: "5px",
              }}
            >
              Next
            </button>
          </div>
    
    </div>
  );
};

export default CardPage;
