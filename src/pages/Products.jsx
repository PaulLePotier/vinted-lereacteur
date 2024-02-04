import { useParams } from "react-router-dom";
import { useState } from "react";
import "../assets/style/Product.css";
import { Link } from "react-router-dom";
import Header from "../assets/components/Header";

export default function ProductPage({ data }) {
  // - Syntaxe avec destructuration
  const { id } = useParams();
  console.log("params id>>", id);

  const queryParams = new URLSearchParams(document.location.search);
  const marque = queryParams.get("marque");

  //   console.log("DATA>>>", data.offers);

  const productID = data.offers.filter((offer) => offer._id === id);
  console.log("DATA FILTRE", productID);
  //   setProduct(filteredTab);

  console.log("DATA>>>", productID);
  return (
    <main>
      <div>
        {productID.map((element) => {
          // console.log("ELEMEMENT", element);
          return (
            <div className="generalproductcard">
              <img
                className="productpic"
                src={element.product_image.secure_url}
                alt=""
              />
              <div className="productspeccard">
                <p className="productprice">{element.product_price}€</p>
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
                    {element.product_details.map((detail) => {
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
                    price: element.product_price,
                    picture: element.product_image.secure_url,
                  }}
                >
                  Acheter
                </Link>
                {/* <p>ProductPage de l'ide {id}</p>
                <p>{marque}</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

//   const [product, setProduct] = useState([]);
// -- 'useParams()' retourne tous les params de l'url
//   const params = useParams();
// console.log("params>>", params);
