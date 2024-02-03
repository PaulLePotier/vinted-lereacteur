import { Link } from "react-router-dom";
import Offers from "../assets/components/Offers";

import "../index.css";
import "../App.css";
import Cookies from "js-cookie";

import "../assets/style/HomePage.css";
import vintedhero from "../assets/img/vintedhero.png";

export default function HomePage({ data, token }) {
  //   console.log("DATAA>>>", data);

  // const token = Cookies.get("userToken");
  return (
    <div>
      {token ? <p>il y a un token</p> : <p>il y a pas de token</p>}
      <button
        onClick={() => {
          Cookies.remove("userToken");
        }}
      >
        Supprimer le cookie APP
      </button>
      {Cookies.get("userToken") !== "" ? (
        <p>{Cookies.get("userToken")}</p>
      ) : (
        <p>NADA</p>
      )}
      {Cookies.get("userToken")}
      <p>{token}</p>
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
