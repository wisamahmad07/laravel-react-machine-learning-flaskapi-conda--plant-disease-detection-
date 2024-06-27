import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../js/theme";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title}  ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <ColorModeScript
                    initialColorMode={theme.config.initialColorMode}
                />
                <App {...props} />
            </ChakraProvider>
            </QueryClientProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
