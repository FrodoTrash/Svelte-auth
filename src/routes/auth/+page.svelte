<script lang="ts">
  import FormRegister from "$lib/components/Form/Register.svelte";
  import FormLogin from "$lib/components/Form/Login.svelte";

  let isSigned = false

</script>



<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-16 text-center">
		<h2 class="font-bold">Register</h2>
    
		<div class="flex justify-center space-x-2">
      {#if isSigned }
        <FormLogin />  
      {:else}
        <FormRegister />
      {/if}
		</div>
	</div>
</div>
