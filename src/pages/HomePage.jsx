import { Link } from "react-router-dom";
import Offers from "../assets/components/Offers";
import "../App.css";
import "../assets/style/HomePage.css";
import "../assets/img/vintedlogo.png";

export default function HomePage({ data }) {
  //   console.log("DATAA>>>", data);
  const id = "1234";
  return (
    <div>
      <header>
        <p>HELLO</p>
        <img src="vintedlogo.png" alt="" />
        <input type="text" />
        <label htmlFor="text"></label>
        <div>
          <Link className="logbutton" to="signup">
            Se connecter
          </Link>
          <Link className="logbutton" to="login">
            s'inscrire
          </Link>
        </div>
      </header>

      <div>
        <p>conneire à ancrée</p>
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
