<script lang="ts">
  import { focusTrap } from '@skeletonlabs/skeleton';
  import { enhance } from "$app/forms";

  import UIInput from '$lib/components/UI/Input.svelte'
  import type { Action } from '@sveltejs/kit';

  let isFocused: boolean = true;

  export let form: Action;

</script>

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
    required
    errors={form?.errors?.password}
  />
  <br>
  <button type="submit" class="btn variant-filled-surface">Login</button>
</form>
