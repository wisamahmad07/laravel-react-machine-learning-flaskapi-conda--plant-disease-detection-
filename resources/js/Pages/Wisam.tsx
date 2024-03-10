import { useEffect, useState } from "react";

interface games {
    id: number;
    name: string;
}
interface Props {
    game: games[];
}
const Wisam = ({ game }: Props) => {
    const [game1, setgame1] = useState(game);

    useEffect(() => axios.get());

    return <>{game.map((g) => console.log(g.name))}</>;
};

export default Wisam;
