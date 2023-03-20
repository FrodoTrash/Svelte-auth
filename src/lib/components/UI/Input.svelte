<script lang="ts">

  export let labelname: string = 'label';
  export let type: string = 'text';
  export let value: string = '';
  export let placeholder: string = '';
  export let name: string = '';
  
  export let errors: string = '';

  const handleChange = (event: any) => {
    value = event.target.value
  }
</script>
<label for={name} class="label">
	<span>{labelname}</span>
	<input class="input" {type} {placeholder} {name} {value}/>

</label>

{#if errors }
  {#each errors as error}
  <label for={name} class="label">
    <span class="text-red-500">{ error }</span>
  </label>
  {/each}
{/if}
