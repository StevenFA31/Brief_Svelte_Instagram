<script>
  export let nom;
</script>

<div class="onePost">
  <div class="barre">
    <div class="top-barre">
      <img class="img1" src="/image/sad-cat.gif" alt="" />
      <p>{nom}</p>
    </div>
    <i class="fa-solid fa-ellipsis" style="margin-top: 17px;" />
  </div>
  <img class="sizeGif" src="image/cat.gif" alt="" />
  <div class="bot-barre">
    <div class="interact-icon">
      <i class="fa-regular fa-heart" />
      <i class="fa-regular fa-comment" />
      <i class="fa-regular fa-comment" />
    </div>
    <i class="fa-solid fa-ellipsis" style="margin-right: 50px;" />
    <i class="fa-regular fa-file" />
  </div>
  <div class="text">
    <p id="likes">340 likes</p>
    <p>{nom}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, beatae
      laborum doloribus reprehenderit ad rerum dolor. Temporibus vitae id atque!
      Repudiandae accusantium beatae magnam nobis cumque voluptatem ut nulla
      quibusdam!
    </p>
  </div>
</div>

<style>
  /* * {
    margin: 0;
    padding: 0;
  } */

  .onePost {
    width: 390px;
  }
  .top-barre {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .bot-barre {
    display: flex;
    justify-content: space-between;
  }
  .sizeGif {
    height: 390px;
    width: auto;
  }
  .img1 {
    width: 25px;
    height: 30px;
    border-radius: 25px;
    margin-right: 10px;
  }
  .interact-icon {
    margin-left: 10px;
    /* display: flex;
    flex-direction: row; */
  }
  .barre {
    display: flex;
    justify-content: space-between;
  }
  .text {
    margin-left: 5px;
  }
  .text p#likes {
    font-weight: bold;
  }
</style>
