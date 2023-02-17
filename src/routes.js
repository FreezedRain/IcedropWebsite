import About from './Routes/About.svelte';
import Games from './Routes/Games.svelte';
import Home from "./routes/Home.svelte";

const routes = {
    '/': Home,
    '/about': About,
    '/games': Games,
};

export default routes;