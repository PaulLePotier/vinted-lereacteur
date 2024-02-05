import { useState } from "react";
import axios from "axios";
// On importe Link et useNavigate pour naviguer

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// On importe pour gérer les tokens utilisateurs
import Cookies from "js-cookie";

import "../assets/style/Login.css";

// On envoie dans la fonction Login les props depuis app.jsx ou on a notre State Token
const Login = ({ setToken }) => {
  // On définit des states vides pour le formulaire de connexion
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // On utilise useNavigate pour pouvoir directement rédiriger la personne si connexion OK
  const navigate = useNavigate();

  // On définit la fonction qui va gérer l'envoie du formulaire au back
  const handleSubmit = async (event) => {
    // Pour éviter que les inputs du formulaire disparaisse
    event.preventDefault();

    try {
      // On s'assure qu'il y ai les champs requis pour envoyer au back - double verif
      if (email && password) {
        // On destructure response.data en renommant "response" / response.data par {data}
        const { data } = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/login",
          {
            email,
            password,
          }
        );

        // VERIF console.log("Login - Axios - response.data >>", data);

        //Une fois qu'on est dans notre IF on set un cookie
        Cookies.set("userToken", data.token, { secure: true });

        // On attribut ce token à notre State token
        setToken(data.token);

        // On redirige la personne connecté vers la page HomePage
        navigate("/");
      } else {
        // SI les champs requis sont pas truthy alors on envoie un message d'erreur
        setErrorMessage("Veuillez remplir tous les champs");
      }
    } catch (error) {
      console.log("Signpage - catch >>>", error.response);
    }
  };

  return (
    <div className="formulairesignup">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value.toString());
          }}
        />
        <button>Se connecter</button>
        {/* Si il y a un Error message alors on l'affiche en dessous du bouton */}
        <p> {errorMessage}</p>
      </form>
      {/* On va à la page login si on a pas de compte */}
      <Link to="/Signup"> Se créer un compte</Link>
    </div>
  );
};

export default Login;
