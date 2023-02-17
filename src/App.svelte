<script>
	import IcedropLogo from "./IcedropLogo.svelte";

	export let name;
</script>

<main>
	<div class="main-body">
		<div class="header">
			<div class="nav-menu">
				<div class="menu-option">
					ABOUT
				</div>
				<div class="menu-option">
					GAMES
				</div>
				<div class="menu-option">
					CONTACT
				</div>

				<div class="filler">

				</div>

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
		<div class="content">
			<IcedropLogo/>
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
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.main-body{
		background-color: #111111;
		height: 100%;
		display: flex;
		flex-direction: column;
		color: #dddddd;
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



</style>