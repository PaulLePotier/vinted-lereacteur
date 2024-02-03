import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "../assets/style/Login.css";

const Login = () => {
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
              // "http://localhost:3000/user/login",

              {
                email: email,
                password: password,
              }
            );
            {
              email !== ""
                ? Cookies.set("userToken") && navigate("/")
                : setErrorMessage("PAS DE MAIL");
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
            setPassword(event.target.value.toString());
          }}
        />
        <button>Se connecter</button>
      </form>
      -<Link to="/Signup"> Se créer un compte</Link>
    </div>
  );
};

export default Login;
