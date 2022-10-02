import Head from "next/head";
import { useRouter } from "next/router";
import { NavbarMain } from "../../common";

export interface MainLayoutInterface {
  children: JSX.Element[] | JSX.Element;
  title?: string;
}

const origin = (typeof window === "undefined")? "" : window.location.origin;

const MainLayout: React.FC<MainLayoutInterface> = ({ children, title }) => {

  const router = useRouter();
  console.log({ origin })

  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Uziel Meliton Hernandez Hernandez" />
        <meta name="description" content="Informacion sobre los pokemones" />
        <meta name="keywords" content="pokemon, pokedex" />
        <meta property="og:title" content={`Informacion sobre el pokemon ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre la descripcion del pokemon ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <NavbarMain />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
