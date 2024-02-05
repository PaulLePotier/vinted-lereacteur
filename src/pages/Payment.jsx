import { useLocation } from "react-router-dom";
//IMPORT STRIPE
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../assets/components/CheckoutForm";

import "../assets/style/Payment.css";

// Clé publique qui est donné dans Apollo
const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = () => {
  // On utilise Use location pour récupérer les infos de la page Products.jsx cf:
  // state={{
  //   price: product.product_price,
  //   picture: product.product_image.secure_url,
  // }}

  const location = useLocation();
  // On récupère les states grâce à UseLocation
  const { price } = location.state;
  const { picture } = location.state;
  return (
    <div>
      <div className="paymentcard">
        <div className="productpaymentdetail">
          <p>Prix du produit: {price ? `${price} €` : "Non spécifié"}</p>
          <img src={picture} alt="image du produit à la page de paiement" />
        </div>
        <Elements stripe={stripePromise}>
          {/* Affiche le composant qui fait apparaitre les inputs de CB */}
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
