import React from "react";

import "./styles.css";
import AppointmentForm from "../AppointmentForm";

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
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, atque
          esse numquam temporibus quam optio ex magnam libero cum fugiat
          doloribus, quaerat ipsa quo id quod ducimus est voluptatum delectus.
        </p>

        <img
          src="../../public/assets/photoindex1.jpeg"
          alt=""
          className=""
          style={{
            width: "250px",
            margin: "20px",
            borderStyle: "hidden",
            borderRadius: "40px",
          }}
        />
      </section>

      <>
        <section
          className=""
          style={{
            margin: "25px",
            width: "250px",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            optio ea maiores deserunt explicabo voluptates aliquid consequatur
            error libero, perferendis tempore, qui facilis quasi nam ad voluptas
            temporibus labore fuga!
          </p>
        </section>
        <section
          className="col-12"
          style={{
            margin: "25px",
            width: "250px",
          }}
        >
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
