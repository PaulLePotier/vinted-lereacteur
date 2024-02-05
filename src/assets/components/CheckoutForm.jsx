import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";

import "../style/CheckoutForm.css";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardInfos = elements.getElement(CardElement);
    const stripeResponse = await stripe.createToken(cardInfos, {
      name: "Paul",
    });
    // console.log("stripe token =>", stripeResponse.token.id);
    const stripeToken = stripeResponse.token.id;

    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/payment",
      {
        stripeToken: stripeToken,
      }
    );
    console.log("TOKEN DE STRIPE>>>>>", stripeToken);
    console.log("reponse back =>", response.data);
    if (response.data.status === "succeeded") {
      // actualiser l'affichage : le card Element ne doit apparaitre (on peut aussi rediriger l'utilisateur !)
      setCompleted(true);
    } else {
      // un message d'erreur (en rouge et en gros ou alors une modal... etc... )
      setErrorMessage(response.data.status);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="pay">
          <CardElement className="payinfo" />
        </div>
        <button>Valider paiement</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

export default CheckoutForm;
