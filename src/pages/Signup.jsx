import "../assets/style/Signup.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (username && email && password) {
        const { data } = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          {
            username,
            email,
            password,
            newsletter,
          }
        );

        // console.log("signupPage - response >>", data);

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

          {errorMessage && <p>{errorMessage}</p>}
        </form>
        <Link to="/login">Se connecter ?</Link>
      </div>
      {Cookies.get("userToken")}
      <button
        onClick={() => {
          Cookies.remove("userToken");
        }}
      >
        Supprimer le cookie
      </button>
    </main>
  );
};

export default Signup;

// {async (event) => {
//   try {
//     //   Cookies.remove("userToken");
//     event.preventDefault();
//     console.log("onSubmit déclenché !");
//     const response = await axios.post(
//       "https://lereacteur-vinted-api.herokuapp.com/user/signup",
//       // "http://localhost:3000/signup",
//       {
//         email: email,
//         username: username,
//         password: password,
//         newsletter: consent,
//       }
//     );
//     console.log(response);
//     //   password.length < 7
//     //     ? setErrorMessage("password trop court")
//     //     : setErrorMessage("");
//     Cookies.set("userToken", response.data.token);
//     // console.log(response.data.token);
//     setToken(response.data.token);
//     navigate("/");
//   } catch (error) {
//     alert(error.response);
//   }
// }}
