import { Card, Col, Modal, Text } from "@nextui-org/react";
import { FC } from "react";
import { SmallPokemon } from "../../../interfaces";

interface Props {
  open: boolean;
  onClose: () => void;
  pokemon: SmallPokemon;
}

const PokemonModal: FC<Props> = ({ open, onClose, pokemon }) => {
  return (
    <>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={open}
        onClose={onClose}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Preview of
            <Text b size={18}>
              {pokemon.name}
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Card css={{ w: "100%" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#ffffffAA"
                >
                  Plant a tree
                </Text>
                <Text h4 color="white">
                  Contribute to the planet
                </Text>
              </Col>
            </Card.Header>
            <Card.Image
              src={pokemon.img}
              width="100%"
              height={340}
              objectFit="cover"
              alt={`Pokemon name ${pokemon.name}`}
            />
          </Card>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
export default PokemonModal;
