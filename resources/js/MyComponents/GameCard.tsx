import { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconLIst from "./PlatformIconList";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    const { genre, platform } = game;

    return (
        <Card overflow="hidden">
            <Image src={game.image} boxSize="100%" />
            <CardBody>
                <Heading fontSize="16px">{game.name}</Heading>
                <PlatformIconLIst platform={platform} />
            </CardBody>
        </Card>
    );
};

export default GameCard;
