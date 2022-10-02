import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { pokeApi } from "../../api";
import { MainLayout } from "../../components/layouts";
import { PokemonDetailResponse, PokemonListResponse } from "../../interfaces";
import { localStorageFavorite } from "../../utils";
import getDataOfLocalStorage from "../../utils/getDataOfLocalStorage";
import confetti from "canvas-confetti"
import getPokemonInfo from "../../utils/getPokemonInfo";

interface Props {
  pokemon: PokemonDetailResponse;
}

const PokemonPageDetailByName: NextPage<Props> = ({ pokemon }) => {
  const router = useRouter();
  const [inFavorites, setInFavorites] = useState<boolean>(false);

  useEffect(() => {
    const data = getDataOfLocalStorage("favorites");
    const findPokemon = data.find((id: number) => id == pokemon.id);
    setInFavorites(!!findPokemon);
  }, [pokemon]);

  const onToggleFavorite = () => {
    localStorageFavorite(pokemon.id);
    setInFavorites((val) => !val);

    if(inFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin:{
        x: 0.9,
        y: 0
      }
    })
  };

  return (
    <MainLayout>
      <Container css={{ mt: "2rem" }}>
        <Grid.Container gap={2}>
          <Grid xs={12} sm={6}>
            <Card variant="flat">
              <Card.Body>
                <Text
                  h3
                  css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  }}
                  weight="bold"
                >
                  #{pokemon.id}
                </Text>
                <Text
                  h2
                  css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  }}
                  weight="bold"
                >
                  Pokemon
                </Text>
                <Text
                  h1
                  size={60}
                  css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                  }}
                  weight="bold"
                >
                  {pokemon.name}
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={6}>
            <Card variant="bordered">
              <Card.Body>
                <Text
                  h2
                  css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  }}
                  weight="bold"
                >
                  Images of pokemon
                </Text>
                <Button onPress={onToggleFavorite} bordered={inFavorites}>
                  {inFavorites ? "Quitar de favoritos" : "Agregar a favoritos"}
                </Button>
                <Grid.Container>
                  <Grid xs={12} sm={6}>
                    <Card.Image
                      src={pokemon.sprites.back_default}
                      objectFit="cover"
                      width={320}
                      height={320}
                      alt="Card image background"
                    />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <Card.Image
                      src={pokemon.sprites.front_default}
                      objectFit="cover"
                      width={320}
                      height={320}
                      alt="Card image background"
                    />
                  </Grid>
                </Grid.Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon150 = await pokeApi.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon?limit=151');
  const pokemonPaths = pokemon150.data.results.map((pokemon) => ({ params: { name: pokemon.name} }));

  return {
    paths: pokemonPaths,
    fallback: false, // enviar al 404 cuando el path no es valido
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};

export default PokemonPageDetailByName;
