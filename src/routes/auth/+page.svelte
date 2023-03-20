<script lang="ts">
  import FormRegister from "$lib/components/Form/Register.svelte";
  import FormLogin from "$lib/components/Form/Login.svelte";
  import type { Action } from "@sveltejs/kit";

  let isSigned: boolean = false;
  function toggleForm() {
    isSigned =! isSigned;
  }

  export let form: Action;

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-16 text-center">
		<h2 class="font-bold">Auth</h2>
    
		<div class="flex justify-center space-x-2">
      {#if isSigned }
        <FormLogin {form}/>
      {:else}
        <FormRegister {form}/>
      {/if}
		</div> 
    {#if isSigned }
      <button on:click={toggleForm}>Register for free</button>
    {:else}
      <button on:click={toggleForm}>Already Signed?</button>
    {/if}   
	</div>
</div>
