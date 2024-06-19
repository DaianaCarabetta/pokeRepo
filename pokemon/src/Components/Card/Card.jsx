import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  return (
    <div>
      <Link to={`/detail/${pokemon.name}`}>
        <h1>{pokemon.name}</h1>
        <img
          alt="pokemon"
          src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
        />
      </Link>
    </div>
  );
};

export default Card;
