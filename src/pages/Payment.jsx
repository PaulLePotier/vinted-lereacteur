import { useLocation } from "react-router-dom";
//IMPORT STRIPE
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../assets/components/CheckoutForm";

import "../assets/style/Payment.css";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = () => {
  const location = useLocation();
  const { price } = location.state;
  const { picture } = location.state;
  return (
    <div>
      <div className="paymentcard">
        <div className="productpaymentdetail">
          <p>Prix du produit: {price ? `${price} €` : "Non spécifié"}</p>
          <img src={picture} alt="" />
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
