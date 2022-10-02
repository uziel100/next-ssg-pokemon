import { Grid } from "@nextui-org/react";
import { SmallPokemon } from "../../../interfaces";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}

const PokemonList: React.FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map(({ id, name, img, url }) => (
        <Grid key={id} xs={12} sm={3}>
          <PokemonCard key={id} id={id} img={img} name={name} url={url} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
export default PokemonList;
