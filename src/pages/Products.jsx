import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../assets/style/Product.css";
import { Link } from "react-router-dom";
import Header from "../assets/components/Header";
import axios from "axios";

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  // - Syntaxe avec destructuration
  const { id } = useParams();
  console.log("params id>>", id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );

        // console.log("response >>>", response.data);
        setProduct(response.data);
      } catch (error) {
        console.log("catch app.js>>>", error.response);
      }

      /* setIsLoading(false); */
    };
    fetchProduct();
  }, []);

  const queryParams = new URLSearchParams(document.location.search);
  const marque = queryParams.get("marque");

  //   console.log("DATA>>>", product.offers);

  console.log("DATA FILTRE", product);
  //   setProduct(filteredTab);

  console.log("DATA>>>", product);
  if (!product) return <p>Patientez...</p>;
  return (
    <main>
      <div>
        <div className="generalproductcard">
          <img
            className="productpic"
            src={product.product_image.secure_url}
            alt=""
          />
          <div className="productspeccard">
            <p className="productprice">{product.product_price}€</p>
            <br />

            <div className="productspec">
              <div className="productspecdetails">
                <p>MARQUE</p>
                <p>TAILLE</p>
                <p>ETAT</p>
                <p>COULEUR</p>
                <p>EMPLACEMENT</p>
              </div>
              <div className="productspecdetails">
                {product.product_details.map((detail) => {
                  return (
                    <div>
                      <div className="productspecdetails">
                        <p>{detail.MARQUE}</p>
                      </div>
                      <div className="productspecdetails">
                        <p>{detail.TAILLE}</p>
                      </div>
                      <div className="productspecdetails">
                        <p>{detail.ÉTAT}</p>
                      </div>
                      <div className="productspecdetails">
                        <p>{detail.COULEUR}</p>
                      </div>
                      <div className="productspecdetails">
                        <p>{detail.EMPLACEMENT}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <Link
              to="/payment"
              state={{
                price: product.product_price,
                picture: product.product_image.secure_url,
              }}
            >
              Acheter
            </Link>
            {/* <p>ProductPage de l'ide {id}</p>
                <p>{marque}</p> */}
          </div>
        </div>
      </div>
    </main>
  );
}

//   const [product, setProduct] = useState([]);
// -- 'useParams()' retourne tous les params de l'url
//   const params = useParams();
// console.log("params>>", params);
