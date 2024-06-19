import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/pokemon";
const apiService = axios.create({
  baseURL,
});

export const getPokemon = async (name) => {
  try {
    const response = await apiService.get(`${baseURL}/${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getPokemons = async (limit, offset) => {
  try {
    const response = await apiService.get(baseURL, { limit, offset });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
