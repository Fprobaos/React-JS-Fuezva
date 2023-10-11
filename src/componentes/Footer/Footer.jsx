import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "200px",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#CBB9A8",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "#0B4F6C",
          borderRadius: 10,
        }}
        className="col-10"
      >
        <Button variant="none" className="btn-social">
          <p>Felipe Probaos</p>
        </Button>
        <Button variant="none" className="btn-social">
          <p>Probaosfelipe@gmail.com</p>
        </Button>
        <p style={{ color: "#A5FFD6", fontSize: "25px" }}>+ 1 3541234567</p>
      </div>
    </div>
  );
};

export default Footer;
