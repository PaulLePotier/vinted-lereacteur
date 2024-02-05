import { Link } from "react-router-dom";
import "../style/Offer.css";

const Offers = ({ offer }) => {
  return (
    <main>
      <Link to={`/products/${offer._id}`}>
        <div>
          <div className="cardoffer">
            <div className="userinfo">
              <img
                className="userprofilpic"
                src={offer.owner.account.avatar?.secure_url}
                alt=""
              />
              <p className="ligthgrey">{offer.owner.account.username}</p>
            </div>
            <img
              className="firstpicture"
              src={offer.product_image.secure_url}
              alt="photo de l'article"
            />
            <div className="offerfirstdescription">
              <h1>{offer.product_price} €</h1>
              <h2>
                {offer.product_details.map((detail, index) => {
                  // console.log(detail);
                  return (
                    <div key={"object" + index}>
                      <p className="ligthgrey">{detail.TAILLE}</p>
                      <p className="ligthgrey">{detail.MARQUE}</p>
                    </div>
                  );
                })}
              </h2>
            </div>
          </div>
        </div>
      </Link>
    </main>
  );
};

export default Offers;
