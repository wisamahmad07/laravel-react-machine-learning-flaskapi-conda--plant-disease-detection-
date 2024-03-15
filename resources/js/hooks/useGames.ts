import { useEffect, useState } from "react";
import ApiClient from "../../services/ApiClient";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
}
export interface Genre {
    id: number;
    name: string;
    image: string;
}
export interface Game {
    id: number;
    name: string;
    image: string;
    platform: Platform[];
    genre: Genre;
}

const useGames = () => {
    const [gamesState, setGamesState] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        ApiClient.get("/games", { signal: controller.signal })
            .then((res) => {
                setGamesState(res.data);
                console.log(res.data);
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
