import { useEffect, useState } from "react";
import ApiClient from "../../services/ApiClient";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
}

const useGames = () => {
    const [gamesState, setGamesState] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        ApiClient.get("/games", { signal: controller.signal })
            .then((res) => {
                setGamesState(res.data.games);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });

        return () => controller.abort();
    }, []);
    return { error, gamesState };
};

export default useGames;
