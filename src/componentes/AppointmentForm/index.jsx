import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import "./styles.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import swal from "sweetalert";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zipCode: "",
    issue: "",
  });

  const onScheduleAppointment = (event) => {
    event.preventDefault();

    let validation = validateData();

    const appointment = {};
    appointment.name = formData.name;
    appointment.email = formData.email;
    appointment.phone = formData.phone;
    appointment.zipCode = formData.zipCode;
    appointment.issue = formData.issue;

    const db = getFirestore();
    const appointmentsCollection = collection(db, "appointments");

    const newAppointment = () => {
      addDoc(appointmentsCollection, appointment)
        .then((res) =>
          swal({
            title: "Appointment created succesfully!",
            text: "Ref. Number: " + res.id,
            icon: "success",
            button: "Aceptar",
          })
        )
        .catch((error) => console.log(error));
    };

    if (validation == false) {
      return swal({
        title: "Su formulario tiene errores",
        text: "Por favor vuelva a ingresar correctamente sus datos",
        icon: "error",
        button: "Aceptar",
      });
    } else {
      newAppointment();
      setFormData({ name: "", phone: "", email: "", zipCode: "", issue: "" });
    }
  };

  const validateData = () => {
    console.log(validateData);
  };

  const onHandleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

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

      <Form onSubmit={onScheduleAppointment}>
        <Form.Group className="formgroup">
          <Form.Control
            name="name"
            type="text"
            value={formData.name}
            onChange={onHandleChange}
            placeholder="First & Last name"
          />
        </Form.Group>
        <Form.Group className="formgroup">
          <Form.Control
            name="phone"
            value={formData.phone}
            onChange={onHandleChange}
            type="text"
            placeholder="Telephone Number"
          />
        </Form.Group>

        <Form.Group className="formgroup">
          <Form.Control
            name="email"
            value={formData.email}
            type="text"
            placeholder="Email"
            onChange={onHandleChange}
          />
        </Form.Group>

        <Form.Group className="formgroup">
          <Form.Control
            name="zipCode"
            value={formData.zipCode}
            type="text"
            placeholder="Zip Code"
            onChange={onHandleChange}
          />
        </Form.Group>

        <Form.Group className="formgroup">
          <Form.Control
            name="issue"
            type="text"
            value={formData.issue}
            as="textarea"
            onChange={onHandleChange}
            rows={4}
            placeholder="Tell us about your problem"
          />
        </Form.Group>
        <Button
          className="btn"
          type="submit"
          style={{ color: "#A5FFD6", backgroundColor: "#0B4F6C" }}
        >
          Sumbit
        </Button>
      </Form>
    </div>
  );
};

export default AppointmentForm;
