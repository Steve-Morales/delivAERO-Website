<script setup lang="ts">
import droneImg from '/images/Design Pics/Drone/7_0030.png';
</script>

<template>
  <section class="section" id="homeSection">
    <!-- to center columns, the parent has to be the image which is impossible -->
    <div class="card">

      <div class="card-image">
        <figure class="image is-2by1 level">
          <img :src="droneImg" alt="Drone Image" width="1280" height="720">

          <div id="title-overlay-pad" class="is-overlay level-right">
            <div id="title-overlay-background" class="has-text-centered">
              <p id="title-home-page">delivAERO</p>
              <p id="tagline-home-page">Revolutionizing the World's Delivery Infrastructure</p>
            </div>
          </div>
        </figure>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

#title-overlay-pad{
  padding-right: 5%;
  padding-bottom: 17%;
}

#title-overlay-background{
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.25em;
}

#tagline-home-page{
  color: white;
}

#title-home-page{
  font-family: 'Audiowide';
  font-size: 25pt;
  color: white;
}

section {
  background-color: #000;
}

@font-face {
  font-family: "Audiowide";
  src: local("Audiowide"),
   url(./fonts/Audiowide/Audiowide-Regular.ttf) format("truetype");
}
</style>
