import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}
const GameCardComponent = ({ children }: Props) => {
    return (
        <Box width="300px" overflow="hidden" borderRadius={10}>
            {children}
        </Box>
    );
};

export default GameCardComponent;
