import NavBar from "@/MyComponents/NavBar";
import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
    return (
        <>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "sidebar main"`,
                }}
            >
                <GridItem area="nav">
                    <NavBar />
                </GridItem>
                <Show above="lg">
                    <GridItem area="sidebar" bg="red">
                        sidebar
                    </GridItem>
                </Show>

                <GridItem area="main" bg="blue">
                    main
                </GridItem>
            </Grid>
        </>
    );
};

export default App;
