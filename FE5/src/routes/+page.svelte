<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	import kickMapLogo from '$lib/images/kickMapLogo.png';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={kickMapLogo} type="image/webp"/>
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		KickMap
		<br />
	</h1>

	<h2>
		All campus events <strong>In one place.</strong>
	</h2>
	
	<!-- <Counter /> -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 100%;
		/* margin-left: 300px; */
		padding: 0 0 calc(100% * 333 / 1400) 0;
	}

	.welcome img {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
</style>