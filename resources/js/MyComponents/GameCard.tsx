import { Game } from "@/hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    const { platform } = game;

    return (
        <Card>
            <Image src={game.image} boxSize="100%" />
            <CardBody>
                <Heading fontSize="16px">{game.name}</Heading>
                <HStack justifyContent={"space-between"}>
                    <PlatformIconList platform={platform} />
                    <CriticScore genre={game.genre_id} />
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;
