<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	export let data
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		{#if data?.user?.username }
			<h2 class="font-bold">Welcome {data?.user?.username}.</h2>
		{:else}
			<h2 class="font-bold">You're not signed in</h2>
		{/if}
		
		<!-- Animated Logo -->
		<!-- / -->
		<div class="flex justify-center space-x-2">
		</div>
	</div>
</div>

<style lang="postcss">

</style>
