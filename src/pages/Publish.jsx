import "../assets/style/Publish.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Publish = ({ token }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  // const [exchange, setExchange] = useState(false);
  const [picture, setPicture] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // FormData pour envoyer les fichiers via une requête
    const formData = new FormData();
    formData.append("title", title);
    // PQ CA DOIT PAS ETRE EGALE A product_title qui est la clé de l'objet dans le back ?
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("price", price);
    formData.append("city", city);
    formData.append("condition", condition);
    formData.append("color", color);
    formData.append("size", size);
    formData.append("picture", picture);

    // Pour insérer plusieurs photos à la même clé du formData A AJOUTER AU MOMENT DES PHOTOS
    // for (const key in images) {
    //   if (Object.hasOwnProperty.call(images, key)) {
    //     formData.append("images", images[key]);
    //   }
    // }

    // pour visualiser le contenu de notre formData : (boucle for of)
    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    try {
      const { data } = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        // "http://localhost:3000/offer/publish",
        formData,
        {
          headers: {
            // AJOUTER TOKEN ICI
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("result upload =>", data);
    } catch (error) {
      alert(error.response);
    }
  };

  return token ? (
    <main>
      <div>
        <h1>Vends tes vetements</h1>
      </div>
      <div className="productupload">
        <div className="productdetailupload">
          <p>Titre</p>
          <p>Description</p>
          <p>Marque</p>
          <p>Taille</p>
          <p>Couleur</p>
          <p>Etat</p>
          <p>Lieu</p>
          <p>Prix</p>
          <p>picture</p>
        </div>
        <div className="productdetailupload">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <input
              type="text"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <input
              type="text"
              value={brand}
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
            <input
              type="text"
              value={size}
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
            <input
              type="text"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
            <input
              type="text"
              value={condition}
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
            <input
              type="text"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
            <input
              type="text"
              value={price}
              onChange={(event) => {
                console.log(event.target.value);
                setPrice(event.target.value);
              }}
            />
            <input
              type="file"
              onChange={(event) => {
                // pour visualiser l'image : on crée un state preview dans lequel on envoi l'info suivante :
                const objectUrl = URL.createObjectURL(event.target.files[0]);
                setPreview(objectUrl);
                setPicture(event.target.files[0]);
              }}
            />
            {preview && <img src={preview} alt="preview-before-upload" />}
            <button>Valider</button>
          </form>
        </div>
      </div>
    </main>
  ) : (
    // les informations mise dans la props state peuvent récupérées grâce à useLocation dans le composant de destination (ici, LogIn)
    <Navigate to="/login" />
  );
};

export default Publish;
