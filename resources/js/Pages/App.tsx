import GenreList from "@/MyComponents/GenreList";
import GameGrid from "../MyComponents/GameGrid";
import NavBar from "../MyComponents/NavBar";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";

const App = () => {
    const { gamesState } = useGames();
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
                    <GridItem area="sidebar">
                        {gamesState.map((game, index) => (
                            <GenreList game={game} key={index} />
                        ))}
                    </GridItem>
                </Show>

                <GridItem area="main">
                    <GameGrid />
                </GridItem>
            </Grid>
        </>
    );
};

export default App;
