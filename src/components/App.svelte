<script>
	import { date } from '../service/stores';
	import EnterDate from './EnterDate.svelte';
	import Messages from './Messages.svelte';
</script>

<main>
	<EnterDate />
	<Messages />
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
