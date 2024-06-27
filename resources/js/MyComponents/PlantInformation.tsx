import { Box, Flex, Text, VStack, Grid, GridItem } from "@chakra-ui/react";

const classes = [
  'Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
  'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 'Cherry_(including_sour)___healthy',
  'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_', 'Corn_(maize)___Northern_Leaf_Blight',
  'Corn_(maize)___healthy', 'Grape___Black_rot', 'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
  'Grape___healthy', 'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot', 'Peach___healthy',
  'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy', 'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy',
  'Raspberry___healthy', 'Soybean___healthy', 'Squash___Powdery_mildew', 'Strawberry___Leaf_scorch', 'Strawberry___healthy',
  'Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold', 'Tomato___Septoria_leaf_spot',
  'Tomato___Spider_mites Two-spotted_spider_mite', 'Tomato___Target_Spot', 'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
  'Tomato___Tomato_mosaic_virus', 'Tomato___healthy'
];

const PlantDiseaseList = () => {
    const columnCount = 4;
    const columnLength = Math.ceil(classes.length / columnCount);
    const columns = Array.from({ length: columnCount }, (_, columnIndex) =>
        classes.slice(columnIndex * columnLength, (columnIndex + 1) * columnLength)
    );

    return (
        <Flex justify="center" align="center"  p={4} color="white" borderRadius="md" boxShadow="md">
            <Grid templateColumns={`repeat(${columnCount}, 1fr)`} gap={6}>
                {columns.map((column, index) => (
                    <GridItem key={index}>
                        <VStack align="start" spacing={2}>
                            {column.map((item, itemIndex) => (
                                <Box key={itemIndex} p={2} bg="gray.600" borderRadius="md" width="100%">
                                    <Text fontSize="md" fontWeight="bold">{item.split('___')[0]}</Text>
                                    <Text fontSize="sm">{item.split('___')[1]}</Text>
                                </Box>
                            ))}
                        </VStack>
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    );
};

const PlantInformation = () => {
    return (
        <Box bg="gray.700" mr={3} mb={5}>
           
            <Box  p={4} mt={8}>
                <Text fontSize="lg" fontWeight="bold" textAlign={"center"}>About Plant Diseases</Text>
                <Text mt={2} textAlign={"center"}>
                    WE HAVE USED CNN MODEL TO TRAIN OUR MODEL. IN THIS MODEL, WE HAVE 38 DIFFERENT TYPES OF LEAVES AND 3GB DATA IN TRAINING, VALIDATION AND TEST DATA. THEN, WE MAKE LARAVEL(BACKEND) AND REACT TYPESCRIPT(FRONTEND) AND THEN MAKE FLASK API USING MINICONDA PYTHON ML VIRTUAL ENVIRONMENT. </Text>
            </Box>
                <Box mt={7}>
                    <Text fontSize="lg" fontWeight="bold" textAlign={"center"}>38 type of leaves</Text>
                                {/* Right side - Plant Disease List */}
                                <PlantDiseaseList />
                </Box>
        </Box>
    );
};

export default PlantInformation;
