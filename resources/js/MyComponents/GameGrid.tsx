import { Text } from "@chakra-ui/react";
import ApiClient from "../../services/ApiClient";
import { useState, useEffect } from "react";

interface Game {
    id: number;
    name: string;
}
const GameGrid = () => {
    const [gamesState, setGamesState] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        ApiClient.get("/cgames")
            .then((res) => {
                setGamesState(res.data.games);
            })
            .catch((err) => setError(err.message));
    }, []);

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
