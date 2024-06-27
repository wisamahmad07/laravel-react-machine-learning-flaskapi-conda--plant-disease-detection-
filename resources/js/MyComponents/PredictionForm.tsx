import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { Box, Button, Input, Text, Center, Icon } from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";

const PredictionForm: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const [prediction, setPrediction] = useState<string | null>(null);

    const mutation = useMutation((formData: FormData) => {
        return axios.post("http://localhost:5000/predict", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFile = event.target.files[0];
            setFile(selectedFile);
            setFileName(selectedFile.name); // Set the file name
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            mutation.mutate(formData, {
                onSuccess: (response) => {
                    setPrediction(response.data.predicted_class);
                    console.log(response.data.predicted_class);
                },
                onError: (error) => {
                    console.error("Error uploading file:", error);
                    setPrediction("Error predicting the disease.");
                },
            });
        }
    };

    return (
        <Center mt={20} mb={5}>
            <Box bg="white" p="8" rounded="lg" shadow="lg" maxW="md" w="full">
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    mb="4"
                    color={"black"}
                    textAlign={"center"}
                >
                    Plant Disease Prediction
                </Text>
                <form onSubmit={handleSubmit}>
                    <Box mb="4" textAlign={"center"}>
                        <Text
                            fontSize="sm"
                            fontWeight="medium"
                            mb="2"
                            color="black"
                        >
                            Upload an image of the leaf
                        </Text>
                            <Input
                                id="file"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                    </Box>
                    <Button
                        type="submit"
                        colorScheme="blue"
                        w="full"
                        fontWeight="bold"
                        py="2"
                        px="4"
                        rounded="md"
                        _hover={{ bg: "blue.700" }}
                    >
                        Predict
                    </Button>
                </form>
                {fileName && ( // Display the file name if it exists
                    <Box
                        mt="4"
                        p="4"
                        bg="green.100"
                        color="green.800"
                        rounded="md"
                    >
                        <Text fontWeight="semibold">Selected File:</Text>
                        <Text>{fileName}</Text>
                    </Box>
                )}
                {prediction && (
                    <Box
                        mt="4"
                        p="4"
                        bg="green.100"
                        color="green.800"
                        rounded="md"
                    >
                        <Text fontWeight="semibold">Prediction:</Text>
                        <Text>{prediction}</Text>
                    </Box>
                )}
            </Box>
        </Center>
    );
};

export default PredictionForm;
