import type { Chain } from "pokedex-promise-v2";

import Pokedex from "pokedex-promise-v2";

export const getTypeColorByPokemonTypeName = (
  typeName: string,
): string | null => {
  switch (typeName) {
    case "normal":
      return "#9298A4";
    case "fighting":
      return "#CE4265";
    case "flying":
      return "#90A7DA";
    case "poison":
      return "#A864C7";
    case "ground":
      return "#DC7545";
    case "rock":
      return "#C5B489";
    case "bug":
      return "#92BC2C";
    case "ghost":
      return "#516AAC";
    case "steel":
      return "#52869D";
    case "fire":
      return "#FB9B51";
    case "water":
      return "#4A90DD";
    case "grass":
      return "#5FBC51";
    case "electric":
      return "#EDD53E";
    case "psychic":
      return "#F66F71";
    case "ice":
      return "#70CCBD";
    case "dragon":
      return "#0C69C8";
    case "dark":
      return "#595761";
    case "fairy":
      return "#EC8CE5";
    case "unknown":
      return "#B7B7CE";
    case "shadow":
      return "#595761";
    default:
      return null;
  }
};

export const getPokemonImage = async (pokemonName: string) => {
  const pokedex = new Pokedex();

  const pokemon = await pokedex.getPokemonByName(pokemonName);

  return pokemon.sprites.other["official-artwork"].front_default;
};

export const getPokemonEvolutionChain = (chain: Chain) => {
  const evolutionChain = [];

  evolutionChain.push({
    name: chain.species.name,
  });

  let currentEvolution = chain.evolves_to;

  while (currentEvolution.length !== 0) {
    evolutionChain.push({
      name: currentEvolution[0].species.name,
      level: currentEvolution[0].evolution_details[0]?.min_level,
    });

    currentEvolution = currentEvolution[0].evolves_to;
  }

  return evolutionChain;
};
