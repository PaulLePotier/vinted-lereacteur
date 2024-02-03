import { Link } from "react-router-dom";
import "../img/vintedlogo.png";

const Header = () => {
  return (
    // <div>
    //   <p>hello</p>
    // </div>
    <header>
      <img src="../assets/img/vintedlogo.png" alt="" />
      <input type="text" />
      <label htmlFor="text"></label>
      <div>
        {/* <Link className="logbutton" to="signup">
          Se connecter
        </Link>
        <Link className="logbutton" to="login">
          s'inscrire
        </Link>
        <Link className="logbutton" to="sell">
          vends
        </Link> */}
        <p>Se connecter</p>
        <p>S'inscrire</p>
        <p>SVendre</p>
      </div>
    </header>
  );
};

export default Header;
