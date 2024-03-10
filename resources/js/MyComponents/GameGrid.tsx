import useGames from "@/hooks/useGames";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
    const { error, gamesState } = useGames();
    return (
        <>
            {error && <Text color="red">{error}</Text>}

            <ul>
                {gamesState.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    );
};

export default GameGrid;
