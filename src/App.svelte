<script>
	import {onMount} from 'svelte';
	import EnterDate from './components/EnterDate.svelte';
	import Messages from './components/Messages.svelte';
	import {scene} from './service/stores'

	onMount(() => {
		$scene.init(document.getElementById('root'))
	})
</script>

<main id='root' class="scene" >
	<EnterDate />
	<Messages />
</main>

<style>
  :global(body) {
		margin: 0px;
  }
	.scene {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
