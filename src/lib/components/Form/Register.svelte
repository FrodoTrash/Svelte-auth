<script lang="ts">
  import { focusTrap } from '@skeletonlabs/skeleton';

  import UIInput from '$lib/components/UI/Input.svelte'

  let isFocused: boolean = true;

  export let form: any;

  
</script>

<form method="POST" use:focusTrap={isFocused}>
  <UIInput labelname="username" name="username" placeholder="@username" error={form?.errors?.username} value={form?.data?.username ?? ''}/>
  <UIInput labelname="password" name="password" placeholder="******" type="password" error={form?.errors?.password}/>
  <UIInput labelname="email" name="email" placeholder="user@email.com" type="password" error={form?.errors?.email}/>
  <br>
  <button type="submit" class="btn variant-filled-surface">Register</button>
</form>