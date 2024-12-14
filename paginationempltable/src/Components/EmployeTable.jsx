import React from "react";

const EmployeTable = ({ data, currentPage, rowsPerPage }) => {
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "left",
        margin: "20px 0",
      }}
    >
      <thead
        style={{
          background: "rgb(16, 150, 123)",
          color: "white",
          border: "none",
        }}
      >
        <tr>
          <th style={{ padding: "12px" }}>ID</th>
          <th style={{ padding: "12px" }}>Name</th>
          <th style={{ padding: "12px" }}>Email</th>
          <th style={{ padding: "12px" }}>Role</th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((e) => (
          <tr
            key={e.id}
            style={{
              borderBottom: "1px solid #ddd",
            }}
          >
            <td style={{ padding: "10px" }}>{e.id}</td>
            <td style={{ padding: "10px" }}>{e.name}</td>
            <td style={{ padding: "10px" }}>{e.email}</td>
            <td style={{ padding: "10px" }}>{e.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeTable;
