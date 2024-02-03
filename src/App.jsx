import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
// import reactLogo from "./assets/react.svg";
import "./App.css";
// import viteLogo from "/vite.svg";
import axios from "axios";

// IMPORT PAGES
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";

// IMPORT COMPOSANT
import Offers from "./assets/components/Offers";
import Header from "./assets/components/Header";

//IMPORT LE TOKEN
// const [token, setToken] = useState("12");

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [token, setToken] = useState(Cookies.get("userToken") || "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );

        // console.log("response >>>", response.data);
        setData(response.data);
      } catch (error) {
        console.log("catch app.js>>>", error.response);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  // console.log("Test data">>>>>>", data);

  return (
    <>
      <div>
        {isLoading ? (
          <p>Patientez</p>
        ) : (
          <main>
            <Router>
              <Header token={token} setToken={setToken} />
              <Routes>
                <Route
                  path="/"
                  element={<HomePage data={data} token={token} />}
                ></Route>
                <Route
                  path="/products/:id"
                  // path={`products/${token ? token : "salut"}`}
                  element={<Products data={data} />}
                ></Route>
                <Route
                  path="/signup"
                  element={<Signup setToken={setToken} />}
                ></Route>{" "}
                <Route
                  path="/login"
                  element={<Login setToken={setToken} />}
                ></Route>
                <Route path="/publish" element={<Publish />}></Route>
              </Routes>
            </Router>
          </main>
        )}
      </div>
    </>
  );
}

export default App;

// COMPOSANT QUI EST OFFER.JSX
// <main>
//   <div>
//     <div className="cardoffer">
//       <div className="userinfo">
//         <img className="userprofilpic" src="" alt="" />
//         <p className="ligthgrey">
//           {offer.owner.account.username}
//         </p>
//       </div>
//       <img
//         className="firstpicture"
//         src={offer.product_image.secure_url}
//         alt="photo de l'article"
//       />
//       <div className="offerfirstdescription">
//         <h1>{offer.product_price} €</h1>
//         <h2>
//           {offer.product_details.map((detail) => {
//             // console.log(detail);
//             return (
//               <div>
//                 <p className="ligthgrey">{detail.TAILLE}</p>
//                 <p className="ligthgrey">{detail.MARQUE}</p>
//               </div>
//             );
//           })}
//         </h2>
//       </div>
//     </div>
//   </div>
// </main>

// INTERESSANT A GARDER LIE A DELIVEROO
// setOffer(response.data.offers);
// console.log(setOffer);
// -- Trie du tbleau des catégories pour ne garder que celle dont le tableau 'meals' possèdent des éléments
// const filteredTab = response.data.categories.filter(
//   (category) => category.meals.length > 0
// );

// setCategoriesList(filteredTab);
