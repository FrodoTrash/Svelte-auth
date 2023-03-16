<script lang="ts">
  export let labelname = 'label';
  export let type = 'text';
  export let value = '';
  export let placeholder = '';
  export let name = '';

  const handleChange = (event: any) => {
    value = event.target.value
  }
</script>

<label class="label">
	<span>{labelname}</span>
	<input class="input" {type} {placeholder} {name} {value}/>
</label>
