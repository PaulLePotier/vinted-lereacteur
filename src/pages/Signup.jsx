import axios from "axios";
import { useState } from "react";
// On importe pour gérer les tokens utilisateurs
import Cookies from "js-cookie";
// On importe Link et useNavigate pour naviguer
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../assets/style/Signup.css";

const Signup = ({ setToken }) => {
  // On définit des states vides pour le formulaire d'inscription
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // On utilise useNavigate pour pouvoir directement rédiriger la personne si inscription OK
  const navigate = useNavigate();

  // On définit la fonction qui va gérer l'envoie du formulaire au back
  const handleSubmit = async (event) => {
    // Pour éviter que les inputs du formulaire disparaisse
    event.preventDefault();

    try {
      // On s'assure qu'il y ai les champs requis pour envoyer au back - double verif
      if (username && email && password) {
        // On destructure response.data en renommant "response" / response.data par {data}
        const { data } = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          {
            username,
            email,
            password,
            newsletter,
          }
        );

        // VERIF console.log("Signup - Axios - response.data >>", data);

        //Une fois qu'on est dans notre IF on set un cookie
        Cookies.set("userToken", data.token, { secure: true });

        // On attribut ce token à notre State token
        setToken(data.token);

        // On redirige la personne connecté vers la page HomePage
        navigate("/");
      }
      // SI les champs requis sont pas truthy alors on envoie un message d'erreur
      else {
        setErrorMessage("Veuillez remplir tous les champs");
      }
    } catch (error) {
      console.log("Signup - catch error >>>", error.response);
    }
  };

  return (
    <main className="container">
      <div className="formulairesignup">
        <h2>Création de compte</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={username}
            onChange={(event) => {
              // console.log(event.target.value); // affiche ce qu'a tapé l'utilisateur
              setErrorMessage("");
              setUsername(event.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Your mail"
            value={email}
            onChange={(event) => {
              // console.log(event.target.value); // affiche ce qu'a tapé l'utilisateur
              setErrorMessage("");
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(event) => {
              // console.log(event.target.value); // affiche ce qu'a tapé l'utilisateur
              setErrorMessage("");
              setPassword(event.target.value);
            }}
          />
          <input
            type="checkbox"
            name="newsletter"
            id="newsletter"
            checked={newsletter}
            onChange={(event) => {
              // Pour supprimer le message d'erreur si l'utilisateur modifie le champs
              setErrorMessage("");
              setNewsletter(!newsletter);
            }}
          />
          <label htmlFor="newsletter">S'incrire à la newsletter</label>

          <button>S'inscrire</button>
          {/* Si il y a un Error message alors on l'affiche en dessous du bouton */}
          {errorMessage && <p>{errorMessage}</p>}
        </form>
        {/* On va à la page login si on est déjà inscrit */}
        <Link to="/login">Se connecter ?</Link>
      </div>
    </main>
  );
};

export default Signup;

// SI ON VEUT AUSSI RAJOUTER UNE CONTRAINTE DE LONGUEUR DU MOT DE PASSE
// password.length < 7
// ? setErrorMessage("password trop court")
// : setErrorMessage("");
