import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  return (
    <div className="flex flex-col shadow-lg gap-2 w-52 h-[300px] rounded-xl bg-[#fef3ed] p-2 m-5 border-2">
      <Link to={`/detail/${pokemon.name}`}>
        <h1 className="text-green-600 text-center font-mono font-semibold capitalize">
          {pokemon.name}
        </h1>
        <div className="flex justify-center items-center h-52 bg-white rounded-xl">
          <img
            className="h-full object-contain rounded-xl"
            alt="pokemon"
            src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-white border-2 m-2 py-2 px-5 rounded-xl hover:bg-slate-600/50 hover:backdrop-blur-3xl transition-all duration-300 ">
            ❤️
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
