<script lang="ts">
  import { focusTrap } from '@skeletonlabs/skeleton';
  import { enhance } from "$app/forms";

  import UIInput from '$lib/components/UI/Input.svelte'

  let isFocused: boolean = true;

  export let form;
</script>

<form action="?/login" method="POST" use:enhance use:focusTrap={isFocused}>
  <UIInput labelname="username" name="username" placeholder="@username"error={form?.errors?.username} />
  <UIInput labelname="password" name="password" placeholder="******" type="password" error={form?.errors?.passowrd}/>
  <br>
  <button type="submit" class="btn variant-filled-surface">Login</button>
</form>