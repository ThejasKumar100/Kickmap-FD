<script>
	import { page } from '$app/stores';
	// import logo from '$lib/images/svelte-logo.svg';
	// import github from '$lib/images/github.svg';
	import pfp from '$lib/images/user-profile-icon.svg';
</script>

<header>
	<!-- Created a Svelte icon and link-jump in top left corner -->
	<div class="corner">
		<!-- <a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a> -->
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>

		<!-- Hotbar labels -->
		<ul>
			<!-- Home -->
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>

			<!-- Map -->
			<li aria-current={$page.url.pathname === '/map' ? 'page' : undefined}>
				<a href="/map">Map</a>
			</li>

			<!-- Search -->
			<li aria-current={$page.url.pathname === '/search' ? 'page' : undefined}>
				<a href="/search">Search</a>
			</li>

			<!-- Calendar -->
			<li aria-current={$page.url.pathname === '/calendar' ? 'page' : undefined}>
				<a href="/calendar">Calendar</a>
			</li>


			<!-- Example -->
			<!-- <li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li> -->
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<!-- Created a Github icon and link-jump in top right corner -->
	<div class="corner">
		<!-- <a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a> -->
		<a href="/student">
			<img src={pfp} alt="Profile" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 5em;
		height: 5em;
	}

	/* CornerA and CornerImg methods are for the svelte and github corner icons */
	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 3em;
		height: 3em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		/* --background: rgba(255, 255, 255, 0.7); */
		--background: #EC7524;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
		/* border-top: var(--size) solid var(white); */
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
		/* color: var(white); */
	}
</style>
