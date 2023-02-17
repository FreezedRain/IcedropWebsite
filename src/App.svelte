<script>
	import IcedropLogo from "./IcedropLogo.svelte";
	import Router from 'svelte-spa-router';
	import {location} from 'svelte-spa-router'
	import routes from './routes.js';

	export let name;
</script>

<main>
	<div class="main-body">
		<div class="header">
			<div class="nav-menu">
				<div class="menu-left">
				<div class="menu-option">
					<a href="/#/about" use:Router.link>
						ABOUT</a>
				</div>
				<div class="menu-option">
					<a href="/#/games" use:Router.link>
					GAMES
					</a>
				</div>
				</div>

				<div class="filler">
					<a href="/" use:Router.link>
						{#if $location != '/'}
							<img src="images/icedrop_new_horizontal.png" class="logo_top"/>
						{/if}
					</a>
				</div>
				<div class="menu-right">
				<div class="menu-option social">
					B
				</div>
				<div class="menu-option social">
					B
				</div>
				<div class="menu-option social">
					B
				</div>
				</div>
			</div>
		</div>
		<div class="content">
			<Router {routes}/>
		</div>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 0;
		margin: 0 0;
		height: 100%;
		overflow: hidden;
		overflow-y: scroll;

		background-color: #111111;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.main-body{
		background-color: #1E2026;
		height: 100%;
		display: flex;
		flex-direction: column;
		color: #C0D6E2;
	}

	.header {
		padding: 1em;
	}

	.nav-menu {
		display: flex;
	}

	.menu-option {
		font-weight: bold;
		font-size: 1.5em;
		padding: 1em;
	}

	.filler {
		flex-grow: 1;
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.menu-left, .menu-right {
		width: 30%;
		display: flex;
	}

	.menu-right {
		justify-content: right;
	}

	.logo_top {
		height: 100px;
		padding-top: 8px;
	}

	.logo_top:hover {
		transform: scale(1.1);
		cursor: pointer;
	}

	.hidden {
		opacity: 0;
	}

</style>