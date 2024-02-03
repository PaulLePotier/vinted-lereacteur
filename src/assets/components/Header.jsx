import { Link } from "react-router-dom";
import vintedlogo from "../img/vintedlogo.png";
import "../style/Header.css";

const Header = ({ token }) => {
  // const token = Cookies.get("userToken");
  console.log(token);
  return token ? (
    <header>
      <img src={vintedlogo} alt="" />
      <input type="text" />
      <label htmlFor="text"></label>

      <div>
        <p
          onClick={() => {
            Cookies.remove("userToken");
          }}
        >
          Se deco
        </p>
        {/* <Link className="logbutton" to="login">
          Se deconnecter
        </Link> */}

        <Link className="logbutton" to="publish">
          vends
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
