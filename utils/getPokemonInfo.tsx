import { pokeApi } from "../api";
import { PokemonDetailResponse } from "../interfaces";



const getPokemonInfo = async (key: string) => {
  const { data } = await pokeApi.get<PokemonDetailResponse>(
    `/pokemon/${key}`
  );

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  }

  return pokemon;
}

export default getPokemonInfo;