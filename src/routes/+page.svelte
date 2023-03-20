<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import { page } from "$app/stores"
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<h2 class="font-bold">Welcome to Skeleton.</h2>
		<!-- Animated Logo -->
		<!-- / -->
		<div class="flex justify-center space-x-2">
			<strong>{$page.data.session?.user?.name ?? "User"}</strong>
		</div>
	</div>
</div>

<style lang="postcss">

</style>
