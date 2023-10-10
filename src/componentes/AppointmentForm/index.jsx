import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import "./styles.css";

const AppointmentForm = () => {
  return (
    <div
      style={{
        borderWidth: "5px",
        borderStyle: "solid",
        borderColor: "#145C9E",
        borderRadius: 15,
        padding: "30px",
        margin: "20px",
      }}
    >
      <p
        style={{
          fontSize: "20px",
          fontFamily: "sans-serif",
          fontStyle: "oblique",
          fontWeight: "bold",
        }}
      >
        Schedule an Appointment!
      </p>

      <Form>
        <Form.Group className="formgroup">
          <Form.Control
            name="name"
            type="text"
            placeholder="First & Last name"
          />
        </Form.Group>
        <Form.Group className="formgroup">
          <Form.Control
            name="phone"
            type="text"
            placeholder="Telephone Number"
          />
        </Form.Group>

        <Form.Group className="formgroup">
          <Form.Control name="email" type="text" placeholder="Email" />
        </Form.Group>

        <Form.Group className="formgroup">
          <Form.Control
            name="repeatEmail"
            type="text"
            placeholder="Repetir email"
          />
        </Form.Group>
        <Button className="btn btn-dark" type="submit">
          Sumbit
        </Button>
      </Form>
    </div>
  );
};

export default AppointmentForm;
