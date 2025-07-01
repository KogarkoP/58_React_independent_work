import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
import Main from "../components/main/main";

const MainPage = () => {
  const [characters, setCharacters] = useState([]);
  const linksArray = [
    { link: "/home", title: "Home" },
    { link: "/about", title: "About" },
    { link: "/contact", title: "Contact" },
  ];

  const fetchCharacters = async () => {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );

    setCharacters(response.data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <Header linksArray={linksArray} />
      <Main characters={characters} />
    </>
  );
};

export default MainPage;
