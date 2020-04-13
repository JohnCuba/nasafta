<script>
	import { date } from '../service/stores';
	import EnterDate from './EnterDate.svelte';
	import Messages from './Messages.svelte';
	import Scene from './3d/Scene.svelte';
</script>

<Scene>
	<EnterDate />
	<Messages />
</Scene>
