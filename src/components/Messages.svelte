<script>
  import { fly } from 'svelte/transition';
  import { stage, objects } from '../service/stores';

  let objectscount;
  objects.subscribe(value => {objectscount = value.length});
</script>

{#if $stage === 1}
  <p transition:fly="{{ y: 400, duration: 3000 }}">
    В этот день рядом с землей пронеслись {objectscount} объектов!
  </p>
{/if}

<style>
  p {
    position: absolute;
  }
</style>
