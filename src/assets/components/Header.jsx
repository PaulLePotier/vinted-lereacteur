import { Link } from "react-router-dom";
import vintedlogo from "../img/vintedlogo.png";
import "../style/Header.css";

const Header = (token) => {
  return token ? (
    <header>
      <Link className="img" to="/">
        <img src={vintedlogo} alt="" />
      </Link>

      <input type="text" />
      <label htmlFor="text"></label>
      <div>
        <Link className="logbutton" to="signup">
          s'inscrire
        </Link>
        <Link className="logbutton" to="login">
          Se connecter
        </Link>
        {/* <Link className="logbutton" to="sell">
          vends
        </Link> */}
      </div>
    </header>
  ) : (
    <header>
      <img src="../assets/img/vintedlogo.png" alt="" />
      <input type="text" />
      <label htmlFor="text"></label>
      <div>
        <Link className="logbutton" to="login">
          Se deconnecter
        </Link>
        <Link className="logbutton" to="sell">
          vends
        </Link>
      </div>
    </header>
  );
};

export default Header;
