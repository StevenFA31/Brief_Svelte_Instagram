<script lang="ts">
  import { onMount } from "svelte";
  import { fetchNasa, pokemon, tabo } from "./store";
  import Storys from "../routes/Storys.svelte";

  $: promise = fetchNasa();
</script>

{#await promise}
  <div>Waiting ...</div>
{:then results}
  {#each tabo as result}
    <Storys nom={result.name} image={result.sprites.front_default} />
  {/each}
{:catch error}
  <div>{error.message}</div>
{/await}
