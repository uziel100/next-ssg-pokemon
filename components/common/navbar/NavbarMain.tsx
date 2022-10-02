import React from "react";
import { Navbar, Button, Text, Link } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import NextLink from "next/link";
export interface NavbarInterface {}

const NavbarMain: React.FC<NavbarInterface> = () => {
  const router = useRouter();

  const handleClick = () => router.push("/");

  return (
    <Navbar shouldHideOnScroll isBordered variant="sticky">
      <Navbar.Brand
        onClick={handleClick}
        css={{ "@hover": { cursor: "pointer" } }}
      >
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
          alt="Logo del pokedex"
          width={80}
          height={80}
        />
        <Text b color="inherit" hideIn="xs">
          Pokedex
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <NextLink href="/favorites" passHref >
            {/* <Link block>
              <Button auto flat> */}
              <a>
                Favoritos

              </a>
              {/* </Button>
            </Link> */}
          </NextLink>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default NavbarMain;
