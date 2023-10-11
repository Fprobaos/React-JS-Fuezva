import React from "react";

import "./styles.css";
import AppointmentForm from "../AppointmentForm";
import { Button } from "react-bootstrap";
import Services from "../Services";

const HomeView = () => {
  return (
    <div className="homeViewContainer">
      <section
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "25px",
        }}
      >
        <AppointmentForm />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 className="subtitle">What do we do?</h2>
          <p style={{ margin: "20px", textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, atque
            esse numquam temporibus quam optio ex magnam libero cum fugiat
            doloribus, quaerat ipsa quo id quod ducimus est voluptatum delectus.
          </p>
          <Services />
        </div>

        <img
          src="../../public/assets/Plumber Background.jpg"
          alt=""
          className=""
          style={{
            width: "400px",
            height: "300px",
            borderRadius: "40px",
          }}
        />
      </section>

      <>
        <section
          className=""
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "25px",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            optio ea maiores deserunt explicabo voluptates aliquid consequatur
            error libero, perferendis tempore, qui facilis quasi nam ad voluptas
            temporibus labore fuga!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi porro
            sint corporis hic quibusdam quaerat quos commodi fuga asperiores,
            sapiente dolorem omnis eligendi labore distinctio accusantium
            voluptatum optio cum maxime.
          </p>
        </section>
      </>
    </div>
  );
};

export default HomeView;
