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

<!-- to center columns, the parent has to be the image which is impossible -->
    <div class="card">

      <div class="card-image">
        <figure class="image is-2by1 level">
          <img src="src\assets\Design Pics\Drone\7_0030.png" alt="Drone Image" width="1280" height="720">

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

  <section class="section level">
    <figure class="image is-2by1 level-item level">
      <img src="src\assets\Design Pics\Batery Swap Station\18_0017.png" alt="Drone Station Image">
      <div class="is-overlay has-text-centered">
        <div>
          <h1 class="title">ABOUT</h1>
        </div>
        <div>
          <h2 class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Nihil voluptate reprehenderit officia quod maxime praesentium excepturi similique 
          repellat quam dolorem, illum voluptatibus autem recusandae iste corporis distinctio 
          ad, enim hic.</h2>
        </div>
        <div>
          <h2 class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Nihil voluptate reprehenderit officia quod maxime praesentium excepturi similique 
          repellat quam dolorem, illum voluptatibus autem recusandae iste corporis distinctio 
          ad, enim hic.</h2>
        </div>
        <div>
          <h2 class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Nihil voluptate reprehenderit officia quod maxime praesentium excepturi similique 
          repellat quam dolorem, illum voluptatibus autem recusandae iste corporis distinctio 
          ad, enim hic.</h2>
        </div>
      </div>
    </figure>
  </section>
</template>

<style scoped>
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
