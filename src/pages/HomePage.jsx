import { Link } from "react-router-dom";
import Offers from "../assets/components/Offers";
import { useNavigate } from "react-router-dom";

import "../index.css";
import "../App.css";
import Cookies from "js-cookie";

import "../assets/style/HomePage.css";
import vintedhero from "../assets/img/vintedhero.png";

export default function HomePage({ data, token }) {
  const navigate = useNavigate();

  //   console.log("DATAA>>>", data);
  console.log(token);
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
