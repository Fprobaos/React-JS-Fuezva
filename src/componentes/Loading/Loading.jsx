import { useEffect } from "react";
import { useState } from "react";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      // removeEventListener(Loading)
      console.log("dismount loading");
    }
  });

  return <h1>cargando</h1>;
};

export default Loading;
