import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPokemon } from "../../Services/PokemonServices";

const Detail = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPokemon(name)
      .then((data) => {
        if (data.name) {
          setPokemon(data);
        } else {
          setError("There are no pokemon with that Name");
        }
      })
      .catch((err) => {
        setError("Error fetching data from API");
        console.error(error);
      });
  }, [name]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="font-extrabold text-center text-white text-3xl uppercase m-3">
        <h1>{pokemon.name}</h1>
      </div>
      <div className="flex flex-row justify-center items-center ">
        <div className="m-5 rounded-lg shadow-lg shadow-slate-300">
          <img
            className="max-h-80 rounded-lg border-4 "
            src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
            alt={pokemon.name}
          />
        </div>
        <div className="flex-col text-white items-center text-2xl m-5">
          <p>Ability: {pokemon.abilities.ability}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Type: {pokemon.types[0].type.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
