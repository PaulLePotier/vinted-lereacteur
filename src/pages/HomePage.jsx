import { Link } from "react-router-dom";
import Offers from "../assets/components/Offers";
import "../App.css";

export default function HomePage({ data }) {
  //   console.log("DATAA>>>", data);
  const id = "1234";
  return (
    <div>
      <main>
        <p>bonjour</p>
        <div className="generalcarddisplay">
          {data.offers.map((offer) => {
            // console.log("OFFER>>>>>", offer);
            // return <p>{offer.product_name}</p>;

            return (
              <main>
                <Offers offer={offer} key={offer._id} />
              </main>
            );
          })}
        </div>
      </main>
    </div>
  );
}
