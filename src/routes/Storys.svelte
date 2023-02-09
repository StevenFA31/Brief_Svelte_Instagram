<script>
  export let nom;
  export let image;
</script>

<div class="oneStory">
  <img class="img1" src={image} alt="" />
  <p>{nom}</p>
</div>

<style>
  .oneStory {
    width: 60px;
  }
  .img1 {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
</style>
