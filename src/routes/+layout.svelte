<script lang='ts'>

	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	const menu = [
		{ name: "Games", link: "/", icon: "fluent:board-games-20-filled"},
    { name: "Affiliattes", link: "/", icon: "fluent:megaphone-loud-16-filled"},
    { name: "Rewards", link: "/", icon: "simple-line-icons:present" },
	];


	export let data
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a class="text-xl font-bold uppercase" href="/">
					BINGUS FOREVER
				</a>
				<!-- <strong class="text-xl uppercase">BINGUS FOREVER</strong> -->
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if !data.user }
					<a
							class="btn btn-sm variant-ghost-surface"
							href="/auth"
						>
							Login
					</a>
				{:else}
				<!-- TODO: IS THERE A BETTER WAY TO LOGOUT? -->
					<form action="/auth/logout" method="POST">
						<button
							class="btn btn-sm variant-ghost-surface"
						>
							Logout
						</button>
					</form>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
