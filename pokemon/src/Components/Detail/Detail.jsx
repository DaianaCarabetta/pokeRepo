import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPokemon } from "../../Services/PokemonServices";

const Detail = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    debugger;
    getPokemon(name)
      .then((data) => {
        debugger;
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

  debugger;

  return (
    <div>
      <div>
        <h1>{pokemon.name}</h1>
      </div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Ability:{pokemon.abilities.ability}</p>
      <p>Weight:{pokemon.weight}</p>
      <p>Type:{pokemon.types[0].type.name}</p>
    </div>
  );
};

export default Detail;
