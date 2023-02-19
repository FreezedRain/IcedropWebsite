import About from './routes/About.svelte';
import Games from './routes/Games.svelte';
import Home from "./routes/Home.svelte";

const routes = {
    '/': Home,
    '/about': About,
    '/games': Games,
};

export default routes;