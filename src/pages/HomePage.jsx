import { Link } from "react-router-dom";
import Offers from "../assets/components/Offers";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "../index.css";
import "../App.css";
import Cookies from "js-cookie";

import "../assets/style/HomePage.css";
import vintedhero from "../assets/img/vintedhero.png";

export default function HomePage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log("starting to fetch");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );

        // console.log("response >>>", response.data);
        setData(response.data);
      } catch (error) {
        console.log("catch app.js>>>", error.response);
      }

      // setIsLoading(false);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  //   console.log("DATAA>>>", data);
  // console.log(token);
  // On return un loader pendant le fetch des produits
  if (!data) return <p>Patientez...</p>;
  return (
    <div>
      {/* {Cookies.get("userToken")} */}

      <div>
        <img className="vintedhero" src={vintedhero} alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <div className="generalcarddisplay">
          {data.offers.map((offer) => {
            {
              /* // console.log("OFFER>>>>>", offer);
            // return <p>{offer.product_name}</p>; */
            }
            return (
              <main key={offer._id}>
                <Offers offer={offer} key={offer._id} />
              </main>
            );
          })}
        </div>
      </div>
    </div>
  );
}
