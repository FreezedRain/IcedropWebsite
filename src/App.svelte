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
				<div class="menu-left">
				<div class="menu-option">
					<a href="/#/about" class="menu-option-link">
						ABOUT</a>
				</div>
				<div class="menu-option">
					<a href="/#/games" class="menu-option-link">
					GAMES
					</a>
				</div>
					<div class="menu-option">
						<a href="/#/press-kit" class="menu-option-link">
							PRESS KIT
						</a>
					</div>
				</div>

				<div class="filler">
					<a href="/">
						{#if $location != '/'}
							<img src="images/icedrop_new_horizontal.png" class="logo_top"/>
						{/if}
					</a>
				</div>
				<div class="menu-right">
					<div class="social">
						<a href="https://twitter.com/IcedropGames" target="_blank"><img src="images/twitter.png"></a>
					</div>
					<div class="social">
						<a href="https://www.tiktok.com/@icedropgames" target="_blank"> <img src="images/tik-tok.png"></a>
					</div>
					<div class="social">
						<a href="mailto:icedropgames@gmail.com"><img src="images/email.png"></a>
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
		position: relative;
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
		max-width: 100%;
		flex-direction: row;

		white-space: nowrap;
	}

	.menu-right {
		justify-content: right;
	}

	@media only screen and (max-width: 1100px) {

		.menu-left {
			flex-direction: column;
			justify-content: left;
			align-items: start;
		}

		.menu-left .menu-option {
			padding-top: 0;
			padding-bottom: 0;
		}

	}

	@media only screen and (max-width: 800px) {

		.menu-right, .menu-left {
			justify-content: center;
			font-size: 16px;
			flex-wrap: nowrap;
		}

		.filler {
			flex-grow: 0;
		}

		.nav-menu {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.menu-option {
			margin: 0.2em 0.4em !important;
			padding: 0.2em 0.4em !important;
		}

		.menu-left {
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}

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