<script lang="ts">

  export let labelname = 'label';
  export let type = 'text';
  export let value = '';
  export let placeholder = '';
  export let name = '';
  
  export let error = '';

  const handleChange = (event: any) => {
    value = event.target.value
  }
</script>
<label class="label">
	<span>{labelname}</span>
	<input class="input" {type} {placeholder} {name} {value}/>
  {#if error }
  <span class="text-red-500">{ error }</span>
  {/if}
</label>

<!-- {#if errors }
  {#each errors as error}
  {error}
  {/each}
{/if} -->
