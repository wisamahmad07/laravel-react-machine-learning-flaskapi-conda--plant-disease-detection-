import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardComponent from "./GameCardComponent";

const GameGrid = () => {
    const { error, gamesState, isLoading } = useGames();
    const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <>
            {error && <Text color="red">{error}</Text>}
            <SimpleGrid
                columns={{
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 4,
                }}
                spacing={10}
                padding={10}
            >
                {isLoading &&
                    Skeleton.map((skeleton) => (
                        <GameCardComponent>
                            <GameCardSkeleton key={skeleton} />
                        </GameCardComponent>
                    ))}
                {gamesState.map((game) => (
                    <GameCardComponent>
                        <GameCard key={game.id} game={game} />
                    </GameCardComponent>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
