import { useNavigate } from "react-router-dom";

import "../assets/style/Signup.css";
import "../App.css";
import Cookies from "js-cookie";

// import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  return (
    <main className="container">
      <div className="formulairesignup">
        <h2>Se connecter</h2>
        <form
          onSubmit={async (event) => {
            try {
              //   Cookies.remove("userToken");
              event.preventDefault();
              console.log("onSubmit déclenché !");
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/user/signup",
                {
                  email: email,
                  username: name,
                  password: password,
                  newsletter: true,
                }
              );
              //   password.length < 7
              //     ? setErrorMessage("password trop court")
              //     : setErrorMessage("");
              //   Cookies.set("userToken", response.data.token);
              //   setToken(response.data.token);
              navigate("/");
            } catch (error) {
              alert(error.response);
            }
          }}
        >
          <input
            type="name"
            placeholder="Your name"
            value={name}
            onChange={(event) => {
              console.log(event.target.value); // affiche ce qu'a tapé l'utilisateur
              setName(event.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Your mail"
            value={email}
            onChange={(event) => {
              console.log(event.target.value); // affiche ce qu'a tapé l'utilisateur
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(event) => {
              console.log(event.target.value); // affiche ce qu'a tapé l'utilisateur
              setPassword(event.target.value);
            }}
          />
          {/* {errorMessage} */}
          <button>S'inscire</button>
        </form>
        <Link to="/login">Se connecter ?</Link>
      </div>
      {/* {Cookies.get("userToken")} */}
    </main>
  );
};

export default Signup;
