import { useState, useEffect } from "react";
import axios from "axios";

// Import de l'image pour le Hero
import vintedhero from "../assets/img/vintedhero.png";

// Import du composant Offers qui fait les cards de chaque produits
import Offers from "../assets/components/Offers";

// Import du style

import "../assets/style/HomePage.css";

export default function HomePage() {
  // On définit data comme null
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //  On définit un fonction qui récupère la data des offres
    const fetchData = async () => {
      try {
        // On définit une variable et on attribut à data la valeur de la response une fois done par axios
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        //VERIF console.log("response >>>", response.data);
        setData(response.data);
      } catch (error) {
        console.log("catch error homepage.jsx>>>", error.response);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Patientez...</p>
  ) : (
    <div>
      <div>
        <img className="vintedhero" src={vintedhero} alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <div className="generalcarddisplay">
          {data.offers.map((offer) => {
            // console.log("VERIF Map element offer>>>>>", offer);

            return (
              <main key={offer._id}>
                {/* Voir composant offer */}
                {/* ON envoie les éléments offer qui sont des objects qui represente chaque produit */}
                <Offers offer={offer} key={offer._id} />
              </main>
            );
          })}
        </div>
      </div>
    </div>
  );
}
