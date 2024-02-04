import "../assets/style/Login.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (email && password) {
        const { data } = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/login",
          {
            email,
            password,
          }
        );

        console.log("signupPage - response >>", data);

        //--  Création du cookie
        Cookies.set("userToken", data.token, { secure: true });

        // -- Envoie du token au state
        setToken(data.token);

        // -- Naviguer vers la page d'accueil
        navigate("/");
      } else {
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
        <p> {errorMessage}</p>
      </form>
      <Link to="/Signup"> Se créer un compte</Link>
    </div>
  );
};

export default Login;
