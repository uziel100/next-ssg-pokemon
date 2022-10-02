import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { SmallPokemon } from "../../../interfaces";

const PokemonCard: React.FC<SmallPokemon> = ({ img, id, name }) => {
  const router = useRouter();

  const handleClick = () => router.push(`/pokemon/${id}`);
  const handleOpenModal = (id: number) => {
    console.log("click", id)
    router.push(`/?pokemon=${id}`, `/pokemon/${id}`)
  }

  return (
    <Card isPressable onClick={() => handleOpenModal(id)}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
            # {id}
          </Text>
          <Text h3 color="white">
            {name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={img}
          objectFit="cover"
          width="100%"
          height="100%"
          alt={`Pokemon ${name}`}
          
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          {/* <Col>
            <Row>
              <Col span={3}>
                <Card.Image
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                  css={{ bg: "black", br: "50%" }}
                  height={40}
                  width={40}
                  alt="Breathing app icon"
                />
              </Col>
              <Col>
                <Text color="#d1d1d1" size={12}>
                  Breathing App
                </Text>
                <Text color="#d1d1d1" size={12}>
                  Get a good nights sleep.
                </Text>
              </Col>
            </Row>
          </Col> */}
          <Col>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                css={{ color: "#94f9f0", bg: "#94f9f026" }}
                onPress={handleClick}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Ver mas
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default PokemonCard;
