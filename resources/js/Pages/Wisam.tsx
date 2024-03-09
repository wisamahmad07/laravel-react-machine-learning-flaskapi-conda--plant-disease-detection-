import { Button, Grid, GridItem, Show } from "@chakra-ui/react";

const Wisam = () => {
    return (
        <>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "sidebar main"`,
                }}
            >
                <GridItem area="nav" bg="green">
                    navbar
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

export default Wisam;
