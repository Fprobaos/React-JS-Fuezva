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
          alignContent: "center",
          justifyContent: "center",
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
      </div>
    </div>
  );
};

export default Footer;
