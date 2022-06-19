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
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" width="1280" height="960">
        </figure>
      </div>

      <div class="card-content is-overlay">
          <!-- some content to be placed over the image -->
          content ontop
      </div>

    </div>


  </section>
</template>

<style scoped>
.bulma-overlay-mixin {
  @include overlay(1.5rem);
  background-color: darkorange;
  border-radius: 0.25em;
  color: white;
  opacity: 0.9;
  padding: 1em;
}
</style>
