import React from "react";
import "./styles.css";

const BelowNavbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
        flexWrap: "wrap",
        backgroundColor: "#CBB9A8",
      }}
    >
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            color: "#1F271B",
            margin: "15px",
            fontStyle: "italic",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          Company's name or logo or ....
        </h1>
      </div>
    </div>
  );
};

export default BelowNavbar;
