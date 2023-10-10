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
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <img
          src="public\assets\Mansion Background.jpg"
          alt=""
          style={{
            height: "150px",
            borderRadius: "5px",
            borderStyle: "hidden",
            borderWidth: "10px",
            margin: 10,
          }}
        />
        <img
          src="public\assets\Trabajo 2.jpeg"
          alt=""
          style={{
            height: "150px",
            borderRadius: "5px",
            borderStyle: "hidden",
            borderWidth: "10px",
            margin: 10,
          }}
        />
        <img
          src="public\assets\Trabajo 3.jpeg"
          alt=""
          style={{
            height: "150px",
            borderRadius: "5px",
            borderStyle: "hidden",
            borderWidth: "10px",
            margin: 10,
          }}
        />
      </div>
    </div>
  );
};

export default BelowNavbar;
