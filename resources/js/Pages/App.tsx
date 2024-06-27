
import NavBar from "../MyComponents/NavBar";
import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './../MyComponents/Home';
import SideBar from "@/MyComponents/SideBar";
import PredictionForm from "@/MyComponents/PredictionForm";
import PlantInformation from "../MyComponents/PlantInformation";

const App = () => {
    const { gamesState } = useGames();
    return (
        <>
            <Router>
                <Flex direction="column" height="100vh">
                    <Grid
                        templateAreas={{
                            base: `"nav" "main"`,
                            lg: `"nav nav" "sidebar main"`,
                        }}
                        templateColumns={{ base: "1fr", lg: "30% 70%" }}
                        templateRows="100%"
                        height={90}
                    >
                        <GridItem area="nav">
                            <NavBar />
                        </GridItem>
                        <Show above="lg">
                            <GridItem area="sidebar">
                                <SideBar />
                            </GridItem>
                        </Show>

                        <GridItem area="main">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/information" element={<PlantInformation />} />
                                <Route path="/prediction" element={<PredictionForm />} />
                            </Routes>
                        </GridItem>
                    </Grid>
                </Flex>
            </Router>

        </>
    );
};

export default App;
