import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";

export const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollections = collection(db, "productos");

    const queryFilter = idCategory
      ? query(queryCollections, where("category", "==", idCategory))
      : queryCollections;

    setTimeout(() => {
      getDocs(queryFilter)
        .then((res) =>
          setProducts(
            res.docs.map((product) => ({ id: product.id, ...product.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 2000);
  }, [idCategory]);

  return loading ? (
    <Loading />
  ) : (
    <div
      style={{
        display: "flex",
      }}
    >
      <ItemList products={products} />
    </div>
  );
};
