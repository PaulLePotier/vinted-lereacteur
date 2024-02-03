import { Link } from "react-router-dom";
import Offers from "../assets/components/Offers";
// import Header from "../assets/components/Header";
import "../index.css";
import "../App.css";

import "../assets/style/HomePage.css";
import "../assets/img/vintedlogo.png";
import Header from "../assets/components/Header";

export default function HomePage({ data }) {
  //   console.log("DATAA>>>", data);
  const id = "1234";

  return (
    <div>
      {/* <header>
        <img src="../assets/img/vintedlogo.png" alt="" />
        <input type="text" />
        <label htmlFor="text"></label>

        <div>
          <Link className="logbutton" to="signup">
            Se connecter
          </Link>
          <Link className="logbutton" to="login">
            s'inscrire
          </Link>
          <Link className="logbutton" to="sell">
            vends
          </Link>
        </div>
      </header> */}
      {/* FIN DU HEADER */}
      <div>
        <img className="heroimg" src="../assets/img/vintedhero.png" alt="" />
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
