<script>
  let name = "Fabrice";
  import Storys from "./Storys.svelte";
  import PokemonApi from "../lib/PokemonAPI.svelte";
</script>

<div class="onePost">
  <div class="myStory">
    <PokemonApi />
  </div>
</div>

<style>
  .onePost {
    width: 390px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .myStory {
    width: 60px;
  }
</style>
