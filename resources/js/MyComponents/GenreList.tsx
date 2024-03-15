import { Game } from "@/hooks/useGames";
import { HStack, Text } from "@chakra-ui/react";

interface Props {
    game: Game;
}

const GenreList = ({ game }: Props) => {
    return (
        <HStack>
            <Text>{game.genre.name}</Text>
        </HStack>
    );
};

export default GenreList;
