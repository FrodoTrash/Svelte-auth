<script lang="ts">
  import { focusTrap } from '@skeletonlabs/skeleton';
  import { enhance } from "$app/forms";

  import UIInput from '$lib/components/UI/Input.svelte'
  import type { Action } from '@sveltejs/kit';

  let isFocused: boolean = true;

  export let form: Action;

</script>
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<h2 class="font-bold">Welcome to Skeleton.</h2>
		<div class="flex justify-center space-x-2">
      <form action="?/login" method="POST" use:enhance use:focusTrap={isFocused}>
        <UIInput 
          labelname="username" 
          name="username" 
          placeholder="@username" 
          required 
          errors={form?.errors?.username}
        />
        <UIInput 
          labelname="password" 
          name="password" 
          placeholder="******" 
          type="password" 
          required errors={form?.errors?.password}
        />
        <br>
        <button type="submit" class="btn variant-filled-surface">Login</button>
      </form>
    </div>
  </div>
</div>  
