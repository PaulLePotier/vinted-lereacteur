import { Link } from "react-router-dom";
import vintedlogo from "../img/vintedlogo.png";
import "../style/Header.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Header = ({ token, setToken }) => {
  // const token = Cookies.get("userToken");
  const navigate = useNavigate();

  console.log(token);
  return token ? (
    <header>
      <Link className="img" to="/">
        <img src={vintedlogo} alt="" />
      </Link>

      <label htmlFor="searchbar"></label>
      <input type="text" placeholder={token} id="searchbar" />

      <div>
        <button
          onClick={() => {
            Cookies.remove("userToken");
            setToken("");
            navigate("/");
            console.log(token);
          }}
        >
          Deconnexion
        </button>

        {/* <Link className="logbutton" to="login">
          Se deconnecter
        </Link> */}

        <Link className="logbutton" to="/publish">
          Vendre un article
        </Link>
      </div>
    </header>
  ) : (
    <header>
      <Link className="img" to="/">
        <img src={vintedlogo} alt="" />
      </Link>
      <input type="text" />
      <label htmlFor="text"></label>
      {/* <p> {token}</p> */}
      <div>
        <Link className="logbutton" to="signup">
          s'inscrire
        </Link>

        <Link className="logbutton" to="login">
          Se connecter
        </Link>

        {/* <Link className="logbutton" to="sell">
//         vends
//       </Link> */}
      </div>
    </header>
  );

  // return token ? (
  //   <header>
  //     <Link className="img" to="/">
  //       <img src={vintedlogo} alt="" />
  //     </Link>

  //     <input type="text" />
  //     <label htmlFor="text"></label>
  //     <div>
  //       <Link className="logbutton" to="signup">
  //         s'inscrire
  //       </Link>
  //       <Link className="logbutton" to="login">
  //         Se connecter
  //       </Link>
  //       {/* <Link className="logbutton" to="sell">
  //         vends
  //       </Link> */}
  //     </div>
  //   </header>
  // ) : (
  //   <header>
  //     <img src="../assets/img/vintedlogo.png" alt="" />
  //     <input type="text" />
  //     <label htmlFor="text"></label>
  //     <div>
  //       <Link className="logbutton" to="login">
  //         Se deconnecter
  //       </Link>
  //       <Link className="logbutton" to="sell">
  //         vends
  //       </Link>
  //     </div>
  //   </header>
  // );
};

export default Header;
