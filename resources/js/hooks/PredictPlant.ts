import { useState } from "react";
import { useQueryClient } from "react-query";
import { Text, Button, Input, Box, Flex, Spacer } from "@chakra-ui/react"; // Import Box from Chakra UI
import { useMutation } from "react-query";

const PredictionForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const queryClient = useQueryClient();

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile!);

    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to receive prediction.");
    }

    return response.json();
  };

  const { mutate, isLoading } = useMutation(uploadImage, {
    onSuccess: (data) => {
      // Update state or do something with the predicted class
      console.log("Predicted class:", data.predicted_class);
    },
    onError: (error) => {
      console.error("Error:", error.message);
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      mutate();
    } else {
      console.error("Please select an image file.");
    }
  };

  return (
    <>
      <p mb={4}>Prediction</p>
        <Input type="file" onChange={handleFileChange} />
        <Button colorScheme="blue" onClick={handleSubmit} isLoading={isLoading}>
          Predict
        </Button>
    </>
  );
};

export default PredictionForm;
