import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Item = memo(({ product }) => {
  return (
    <div className="cardContainer">
      <div className="card-header">
        <h3>{product.name}</h3>
      </div>

      <div
        className="card-body"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>{product.category}</h2>
        <img src={product.photo} alt="foto" className="img-fluid w-75 " />
      </div>

      <div
        className="card-footer w-100"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        Precio : {product.price}
        <Link to={`/detalle/${product.id}`}>
          <div>
            <button className="btn btn-dark"> Detalle</button>
          </div>
        </Link>
      </div>
    </div>
  );
});

export default Item;
