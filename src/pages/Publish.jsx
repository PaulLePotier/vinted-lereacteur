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
  // const [exchange, setExchange] = useState(false); SI ON VEUT FAIRE UN SWITHC : Ok pour échanger des produits.
  const [picture, setPicture] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // FormData pour envoyer les fichiers via une requête
    const formData = new FormData();
    //ATTENTION, "___" doit être égale à la requête du back
    // COURS :
    // {
    //   "title": "Air Max 90",
    //   "description": "Toutes neuves",
    //   "price": 120,
    //   "condition": "Neuf",
    //   "city": "Paris",
    //   "brand": "Nike",
    //   "size": 44,
    //   "color": "blue",
    //   "picture": selectedFile // le fichier image sélectionné par l'utilisateur
    // }

    formData.append("title", title);

    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("price", price);
    formData.append("city", city);
    formData.append("condition", condition);
    formData.append("color", color);
    formData.append("size", size);
    formData.append("picture", picture);

    // POUR INFO COURS  - Pour insérer plusieurs photos à la même clé du formData A AJOUTER AU MOMENT DES PHOTOS
    // for (const key in images) {
    //   if (Object.hasOwnProperty.call(images, key)) {
    //     formData.append("images", images[key]);
    //   }
    // }

    // VERIF pour visualiser le contenu de notre formData : (boucle for of)
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    try {
      const { data } = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        // "http://localhost:3000/offer/publish", FONCTIONNE MAIS J'AI PAS ENCORE GERER LES PICTURES
        formData,
        {
          headers: {
            // Info du cours - pour envoyer le formdata au back
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log("Publish - axios - response.data =>", data);
    } catch (error) {
      alert(error.response);
    }
  };

  // Pas de raison en soit parce que on peut pas cliquer sur vendre si on a pas de token
  return token ? (
    <main>
      <div>
        <h1>Vends tes vetements</h1>
      </div>
      {/* J'ai mal géré ici d'un point de vue CSS, vaut mieux faire des binomes balises Label/Input */}
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
                //VERIF console.log(event.target.value);
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
    // Pas besoin d'utiliser de useLocation pour le moment car dans la config actuel je peux pas accéder au bouton vendre si pas connecté
    <Navigate to="/login" />
  );
};

export default Publish;
