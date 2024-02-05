import "../assets/style/Product.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Pour récuperer les params envoyer dans l'URL depuis le composant Offers.jsx
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  // Desctrucuration - on récupère l'id envoyer dans les params "/products/:id" : id de l'offer_id
  const { id } = useParams();
  // VERIF console.log("Reception du params id de Offers.jsx>>", id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // On peut aussi faire {data} en destructuration de response.data
        const response = await axios.get(
          // On get uniquement l'id de l'offer
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );

        // VERIF console.log("Products - axios - response.data >>>", response.data);
        setProduct(response.data);
      } catch (error) {
        console.log("catch app.js>>>", error.response);
      }

      /* setIsLoading(false); */
    };
    fetchProduct();
  }, []);

  // PAS UTILE MAIS UTILE POUR ENVOYER DES QUERYS ICI - EXEMPLE
  // const queryParams = new URLSearchParams(document.location.search);
  // const marque = queryParams.get("marque");

  // VERIF console.log("Products - object product", product);

  // Autre methode que d'utiliser un State isLoading ? <p>Patientez...</p> :
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
            {/* Comme pour Publish.jsx pas idéal il faudrait faire des binomes Label /Input et revoir le css */}
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
            {/* TEST Pour afficher les id et le test du query */}
            {/* <p>ProductPage de l'id n°{id}</p>
                <p>{marque}</p> */}
          </div>
        </div>
      </div>
    </main>
  );
}
