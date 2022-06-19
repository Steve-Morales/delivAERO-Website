<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './../node_modules/Bulma/CSS/bulma.css';

import NavBar from './components/NavBar.vue';
</script>

<template>
  <div>
    <NavBar>

    </NavBar>
  </div>

  <section class="section">

    <div class="card">

      <div class="card-image">
        <figure class="image is-2by1">
          <img src="src\assets\Design Pics\Drone\7_0030.png" alt="Placeholder image" width="1280" height="720">
        </figure>
      </div>

      <div class="card-content is-overlay">
          <!-- some content to be placed over the image -->
          <div class="columns is-centered">
            <div class="column is-6">
              <!-- nothing goes here, text over image -->
            </div>
            <!-- 
              centering text
              https://stackoverflow.com/questions/50398678/center-content-in-bulma-column#:~:text=This%20will%20make,class%3D%22is%2Dcentered%22 
              -->
            <div class="column is-4 has-text-centered bulma-overlay-mixin">
              <h5 id="title-home-page" class="is-centered is-white">
                delivAERO
              </h5>
              <h1>
                Revolutionizing the World's Delivery Infrastructure
              </h1>
            </div>
          </div>
      </div>

    </div>


  </section>
</template>

<style scoped>
#title-home-page{
  font-family: 'Audiowide';
  font-size: 25pt;
}

.bulma-overlay-mixin {
  @include overlay(1.5rem);
  background-color: rgb(0, 29, 159);
  border-radius: 0.25em;
  color: white;
  opacity: 0.9;
  padding: 1em;
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
