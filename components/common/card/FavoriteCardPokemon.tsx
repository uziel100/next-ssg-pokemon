import { Card, Grid, Link } from "@nextui-org/react";
import NextLink from "next/link";

interface Props {
  pokemonId: number;
}

const FavoriteCardPokemon: React.FC<Props> = ({ pokemonId }) => {
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <NextLink href={`/pokemon/${pokemonId}`} passHref>
        <Link>
          <Card isHoverable isPressable>
            <Card.Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
              alt={`Pokemo num. ${pokemonId}`}
            />
          </Card>
        </Link>
      </NextLink>
    </Grid>
  );
};
export default FavoriteCardPokemon;
