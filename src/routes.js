import About from './routes/About.svelte';
import Games from './routes/Games.svelte';
import Home from "./routes/Home.svelte";
import PressKit from "./routes/PressKit.svelte";

const routes = {
    '/': Home,
    '/about': About,
    '/games': Games,
    '/press-kit': PressKit,
};

export default routes;