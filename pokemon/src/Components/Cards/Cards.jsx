import React from "react";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import { getPokemons } from "../../Services/PokemonServices";

const Cards = () => {
  const [pokemons, setPokemons] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  return (
    <div className="p-8 flex flex-row flex-wrap   place-content-center">
      {pokemons && pokemons.map((p) => <Card pokemon={p} key={p.name} />)}
    </div>
  );
};

export default Cards;
