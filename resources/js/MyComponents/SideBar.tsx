import { VStack, Text, Box, Divider, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <VStack paddingLeft={3} marginTop={5} align="flex-start">
            <Link to="/">
                <Box
                    bgGradient="linear(to-r, #2D3748, #1A202C)"
                    borderRadius="md"
                    boxShadow="xl"
                    p={1}
                    textAlign="center"
                    width="300px"
                    maxWidth="500px"
                    mx="auto"
                    mt={8}
                    transition="background 2s ease"
                    _hover={{
                        bgGradient: "linear(to-r, teal.500, green.500)",
                    }}
                >
                    <Text
                        fontSize="2xl"
                        color="white"
                        textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)"
                        mb={2}
                    >
                        HOME
                    </Text>
                    <Flex justify="center">
                        <Divider borderColor="white" width="25%" />
                    </Flex>
                </Box>
            </Link>
            <Link to="/information">
                <Box
                    bgGradient="linear(to-r, #2D3748, #1A202C)"
                    borderRadius="md"
                    boxShadow="xl"
                    p={1}
                    textAlign="center"
                    width="300px"
                    maxWidth="500px"
                    mx="auto"
                    mt={8}
                    transition="background 2s ease"
                    _hover={{
                        bgGradient: "linear(to-r, teal.500, green.500)",
                    }}
                >
                    <Text
                        fontSize="2xl"
                        color="white"
                        textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)"
                        mb={2}
                    >
                        INFORMATION
                    </Text>
                    <Flex justify="center">
                        <Divider borderColor="white" width="25%" />
                    </Flex>
                </Box>
            </Link>
            <Link to="/prediction">
                <Box
                    bgGradient="linear(to-r, #2D3748, #1A202C)"
                    borderRadius="md"
                    boxShadow="xl"
                    p={1}
                    textAlign="center"
                    width="300px"
                    maxWidth="500px"
                    mx="auto"
                    mt={8}
                    transition="background 2s ease"
                    _hover={{
                        bgGradient: "linear(to-r, teal.500, green.500)",
                    }}
                >
                    <Text
                        fontSize="2xl"
                        color="white"
                        textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)"
                        mb={2}
                    >
                        PREDICTION
                    </Text>
                    <Flex justify="center">
                        <Divider borderColor="white" width="25%" />
                    </Flex>
                </Box>
            </Link>
        </VStack>
    );
};

export default SideBar;
