import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ProductPage({ data }) {
  //   const [product, setProduct] = useState([]);
  // -- 'useParams()' retourne tous les params de l'url
  //   const params = useParams();
  // console.log("params>>", params);

  // - Syntaxe avec destructuration
  const { id } = useParams();
  console.log("params id>>", id);

  //   console.log("DATA>>>", data.offers);

  const productID = data.offers.filter((offer) => offer._id === id);
  console.log("DATA FILTRE", productID);
  //   setProduct(filteredTab);

  return (
    <main>
      <div>
        {productID.map((element) => {
          console.log("ELEMEMENT", element);
          return (
            <div>
              <img src={element.product_image.secure_url} alt="" />
              <p>{element.product_name}</p>
              <p>ProductPage de l'ide {id}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
