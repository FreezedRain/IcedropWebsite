import About from './Routes/About.svelte';
import Games from './Routes/Games.svelte';
import Home from "./routes/Home.svelte";
import PressKit from "./routes/PressKit.svelte";

const routes = {
    '/': Home,
    '/about': About,
    '/games': Games,
    '/press-kit': PressKit,
};

export default routes;