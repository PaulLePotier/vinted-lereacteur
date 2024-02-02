import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/style/Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  return (
    <div className="formulairesignup">
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/login",
              {
                email: email,
                password: password,
              }
            );
            {
              email !== "" ? navigate("/") : setErrorMessage("PAS DE MAIL");
            }
            console.log("submit declenché");
          } catch (error) {
            alert(error.response);
          }
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <p> {errorMessage}</p>
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button>Se connecter</button>
      </form>
      -<Link to="/Signup"> Déjà un compte?</Link>
    </div>
  );
};

export default Signin;
