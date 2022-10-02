import { Container, Grid } from "@nextui-org/react";
import type { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { pokeApi } from "../api";
import { PokemonList, PokemonModal } from "../components/common/card";
import { MainLayout } from "../components/layouts";
import {
  PokemonDetailResponse,
  PokemonListResponse,
  SmallPokemon,
} from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: FC<Props> = (props) => {
  const { pokemons } = props;
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState<SmallPokemon | null>(null)

  const handleClose = () => {
    setOpen(false)
    setSelectedPokemon(null)
    router.push("/")
  };

  useEffect(() => {
    if(!router.query.pokemon) return;
  
    const pokemonId = router.query.pokemon;
    const pokemonFind = pokemons.find(item => `${item.id}` === pokemonId);
    if(!pokemonFind) return;
    setSelectedPokemon(pokemonFind)
  }, [router.query, pokemons])
  


  return (
    <>
      { selectedPokemon && (
        <PokemonModal onClose={handleClose} open={!!selectedPokemon} pokemon={selectedPokemon} />
      )}
      <MainLayout title="Pokemon index">
        <Container>
          <Grid.Container gap={2} justify="flex-start">
            <PokemonList pokemons={pokemons} />
          </Grid.Container>
        </Container>
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=150");
  const promisePokemons = data.results.map((item) =>
    pokeApi.get<PokemonDetailResponse>(item.url)
  );
  const pokemonsDetails = await Promise.all(promisePokemons);
  const mapperPokemos = data.results.map<SmallPokemon>((item, idx) => ({
    ...item,
    id: pokemonsDetails[idx].data.id,
    img: pokemonsDetails[idx].data.sprites.other?.dream_world.front_default || pokemonsDetails[idx].data.sprites.front_default,
  }));

  return {
    props: {
      pokemons: mapperPokemos,
    }, // will be passed to the page component as props
  };
};

export default HomePage;
