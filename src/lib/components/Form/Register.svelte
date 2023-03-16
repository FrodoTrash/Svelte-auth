<script lang="ts">
  import { focusTrap } from '@skeletonlabs/skeleton';

  import UIInput from '$lib/components/UI/Input.svelte'

  let isFocused: boolean = true;
</script>

<form method="POST" use:focusTrap={isFocused}>
  <UIInput labelname="username" name="username" placeholder="@username"/>
  <UIInput labelname="password" name="password" placeholder="******" type="password"/>
  <br>
  <button type="submit" class="btn variant-filled-surface">Register</button>
</form>