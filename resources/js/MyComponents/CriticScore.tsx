// genre_id

import { Badge } from "@chakra-ui/react";

interface Props {
    genre: number;
}
const CriticScore = ({ genre }: Props) => {
    let color = genre <= 5 ? "red" : genre >= 5 ? "green" : "";

    return (
        <>
            <Badge
                fontSize="14px"
                paddingX={2}
                borderRadius="4px"
                colorScheme={color}
            >
                {genre}
            </Badge>
        </>
    );
};

export default CriticScore;
