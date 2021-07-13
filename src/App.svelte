<script lang="ts">
  import Button from 'Components/Button.svelte';
  import { count, title } from 'Stores/index';
  const kmacoders: string = 'kmacoders';
</script>

<main>
	<h3>{$title}</h3>

  <div class="result">
    {$count}
  </div>
  <Button />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h3 {
		color: #ff3e00;
		text-transform: uppercase;
	}

  .result {
    font-size: 40px;
    margin: 20px;
    font-weight: 600;
  }
</style>
