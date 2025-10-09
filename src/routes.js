import About from './routes/About.svelte';
import Games from './routes/Games.svelte';
import Home from "./routes/Home.svelte";
import PressKit from "./routes/PressKit.svelte";
import LokOneSheet from "./routes/LokOneSheet.svelte";
import UltrapoolRedirect from "./routes/UltrapoolRedirect.svelte";

const routes = {
    '/': Home,
    '/about': About,
    '/games': Games,
    '/press-kit': PressKit,
    '/lok-one-sheet': LokOneSheet,
    '/ultrapool-redirect': UltrapoolRedirect,
};

export default routes;