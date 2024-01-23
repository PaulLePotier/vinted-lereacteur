import { Link } from "react-router-dom";

const Offers = ({ offer }) => {
  return (
    <main>
      <div>
        <div className="cardoffer">
          <div className="userinfo">
            <img className="userprofilpic" src="" alt="" />
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
              {offer.product_details.map((detail) => {
                // console.log(detail);
                return (
                  <div>
                    <p className="ligthgrey">{detail.TAILLE}</p>
                    <p className="ligthgrey">{detail.MARQUE}</p>
                  </div>
                );
              })}
            </h2>
            <p>
              <Link to={`/products/${offer._id}`}>Voir le produit</Link>

              {/* <Link to="/products">Voir le produit</Link> */}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Offers;
