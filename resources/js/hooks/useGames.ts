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
    genre_id: number;
}

const useGames = () => {
    const [gamesState, setGamesState] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, SetLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        SetLoading(true);
        ApiClient.get("/games", { signal: controller.signal })
            .then((res) => {
                setGamesState(res.data);
                SetLoading(false);
                console.log(res.data);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                SetLoading(false);
            });

        return () => controller.abort();
    }, []);
    return { error, gamesState, isLoading };
};

export default useGames;
