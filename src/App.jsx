import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./App.css";
// import axios from "axios";

// IMPORT PAGES
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

// IMPORT COMPOSANT
import Offers from "./assets/components/Offers";
import Header from "./assets/components/Header";

function App() {
  // On définit les tokens - ici pour le transfert pyramide
  const [token, setToken] = useState(Cookies.get("userToken") || "");

  return (
    <>
      <div>
        <main>
          <Router>
            <Header token={token} setToken={setToken} />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route
                path="/products/:id"
                // path={`products/${token ? token : "salut"}`}
                element={<Products />}
              ></Route>
              <Route
                path="/signup"
                element={<Signup setToken={setToken} />}
              ></Route>{" "}
              <Route
                path="/login"
                element={<Login setToken={setToken} />}
              ></Route>
              <Route
                path="/publish"
                element={<Publish token={token} />}
              ></Route>
              <Route path="/payment" element={<Payment />}></Route>
            </Routes>
          </Router>
        </main>
      </div>
    </>
  );
}

export default App;
