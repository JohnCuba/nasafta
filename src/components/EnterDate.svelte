<script>
  import { fly } from 'svelte/transition';
  import { date, objects, stage } from '../service/stores';
  import api from '../service/api';
  import utils from '../service/utils';

  function changeDate(event) {
    date.set(event.target.value || utils.getDateString());
  };

  function handleLookup() {
    api.getNeoArray($date).then((ans) => objects.set(ans));
    stage.update(n => n+1);
  };
</script>

{#if $stage === 0}
  <section out:fly='{{ y: -400, duration: 2000 }}'>
    <input type=date on:input={changeDate} />
    <button on:click={handleLookup}>Look up!</button>
  </section>
{/if}

<style>
  section {
    position: absolute;
  }
</style>
