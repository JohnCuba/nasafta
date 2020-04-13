<script>
  import { fly } from 'svelte/transition';
  import { stage, objects } from '../service/stores';
  import utils from '../service/utils';

  let objectscount;
  objects.subscribe(value => {objectscount = value.length});
</script>

{#if $stage === 1}
  <p
    in:fly='{{ y: 400, duration: 3000 }}'
    out:fly='{{ y: -400, duration: 3000 }}'
    on:introend='{() => stage.update(n => n+1)}'
  >
    В этот день рядом с землей пронеслись {objectscount} объектов!
  </p>
{:else if $stage === 2}
  <p
    in:fly='{{ y: 400, duration: 3000 }}'
    out:fly='{{ y: -400, duration: 3000 }}'
    on:introend='{() => stage.update(n => n+1)}'
  >
    И ближайший из них - {utils.getNearest($objects).name.replace(/[()]/g, '')}
  </p>
{/if}

<style>
  p {
    position: absolute;
    color: azure;
  }
</style>
