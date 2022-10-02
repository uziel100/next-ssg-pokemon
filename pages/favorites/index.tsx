import { useEffect, useState } from "react";
import FavoritePokemons from "../../components/common/card/FavoritePokemons";
import NoFavoritePokemon from "../../components/common/card/NoFavoritePokemon";
import { MainLayout } from "../../components/layouts";
import getDataOfLocalStorage from "../../utils/getDataOfLocalStorage";

const FavoritesPage = () => {
  const [pokemos, setPokemos] = useState<number[]>([]);

  useEffect(() => {
    const data = getDataOfLocalStorage("favorites");
    console.log({ data });
    setPokemos(data);
  }, []);

  return (
    <MainLayout>
      {pokemos.length === 0 ? (
        <NoFavoritePokemon />
      ) : (
        <FavoritePokemons pokemons={pokemos} />
      )}
    </MainLayout>
  );
};
export default FavoritesPage;
