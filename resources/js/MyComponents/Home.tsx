import Wisam from "../../../public/images/Wisam.png";
import Afnan from "../../../public/images/Afnan.png";
import Zeeshan from "../../../public/images/Zeeshan.png";
import Plant from "../../../public/images/PlantDiseaseDetection.png";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Home = () => {
    return (
        <>
            <Flex justify="center" align="center" mt={8} gap={8}>
                {/* First Team Member */}
                <Box
                    width="200px"
                    p={4}
                    textAlign="center"
                    boxShadow="md"
                    borderRadius="md"
                    bg="gray.700"
                    color="white"
                >
                    <Image
                        borderRadius="full"
                        boxSize="150px"
                        src={Wisam}
                        alt="Team Member 1"
                        mx="auto"
                        mb={4}
                    />
                    <Text fontSize="xl" fontWeight="bold">
                        WISAM AHMAD
                    </Text>
                    <Text fontSize="md">FA21-BSE-022</Text>
                </Box>

               
            </Flex>

            {/* Description Section with Image */}
            <Box
                mt={8}
                p={4}
                maxWidth="800px"
                mx="auto"
                bg="gray.700"
                color="white"
                borderRadius="md"
                boxShadow="md"
                mb={8} 
            >
                <Flex align="center">
                    <Box flex="1" textAlign="left">
                        <Text fontSize="lg" textAlign={"justify"}>
                            We have developed a Plant Disease Detection System
                            tailored for farmers to help manage their crops
                            efficiently. This system provides comprehensive
                            information about various plants and allows users to
                            upload images to predict diseases using advanced
                            image recognition technology. By leveraging this
                            system, farmers can ensure better crop health and
                            yield.
                        </Text>
                    </Box>
                    <Box flex="1" textAlign="center">
                        <Image
                            borderRadius="md"
                            boxSize="250px"
                            src={Plant}
                            alt="Plant Disease Detection"
                            mx="auto"
                            mb={4}
                        />
                    </Box>
                </Flex>
            </Box>

        </>
    );
};

export default Home;
