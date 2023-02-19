<script>
	import Router from 'svelte-spa-router';
	import {location} from 'svelte-spa-router'
	import routes from './routes.js';

	export let name;
</script>

<main>
	<div class="main-body">
		<div class="header">
			<div class="nav-menu">
				<div class="menu-left" style="visibility: hidden">
				<div class="menu-option">
					<a href="/#/about" class="menu-option-link">
						ABOUT</a>
				</div>
				<div class="menu-option">
					<a href="/#/games" class="menu-option-link">
					GAMES
					</a>
				</div>
				</div>

				<div class="filler">
					<a href="/">
						{#if $location != '/'}
							<img src="images/icedrop_new_horizontal.svg" class="logo_top"/>
						{/if}
					</a>
				</div>
				<div class="menu-right" style="visibility: hidden">
				<div class="social">
					<img src="images/twitter.png">
				</div>
				<div class="social">
					<img src="images/tik-tok.png">
				</div>
				<div class="social">
					<img src="images/email.png">
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

		background-color: #1E2026;
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
		padding: 0.5em;
		margin: 0.5em;
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
		cursor: pointer;
	}

	.social {
		padding: 1em;
	}

	.social img {
		width: 32px;
		filter: invert(94%) sepia(2%) saturate(4420%) hue-rotate(174deg) brightness(89%) contrast(100%);
		cursor: pointer;

		transition: 0.1s;
	}

	.social img:hover {
		transform: scale(1.1);
		filter: invert(100%);
	}

	.menu-option-link:hover {
		color: white;
	}

</style>