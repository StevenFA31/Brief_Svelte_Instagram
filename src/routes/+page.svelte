<script>
  import Picture from "./Picture.svelte";
  import StoryBar from "./StoryBar.svelte";
  import { fetchNasa, tabo } from "../lib/store";

  $: promise = fetchNasa();
</script>

<StoryBar />

{#await promise}
  <div>Waiting ...</div>
{:then results}
  {#each tabo as result}
    <Picture nom={result.name} />
  {/each}
{:catch error}
  <div>{error.message}</div>
{/await}
