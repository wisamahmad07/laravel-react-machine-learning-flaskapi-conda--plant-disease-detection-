import { Game } from "@/hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { FaAndroid } from "react-icons/fa";
interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    const { platform } = game;

    return (
        <Card overflow="hidden" borderRadius={10} width="300px">
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
