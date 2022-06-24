<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './../node_modules/Bulma/CSS/bulma.css';

// https://antoniandre.github.io/vueper-slides/?ref=madewithvuejs.com
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import NavBar from './components/NavBar.vue';
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <NavBar>

    </NavBar>
    <p id="fill-background"><br></p>
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

  <section class="section is-centered">
    <figure class="image is-2by1 level">
      <img src="src\assets\Design Pics\Batery Swap Station\18_0017.png" alt="Drone Station Image">
      <div class="is-overlay has-text-centered">
        <div>
          <p><br></p>
          <h1 class="title">ABOUT</h1>
          <p><br></p>
        </div>

        <div id="about-overlay-padding">
          <div id="about-overlay-background">
            <div>
              <h2 id="about-text" class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Nihil voluptate reprehenderit officia quod maxime praesentium excepturi similique 
              repellat quam dolorem, illum voluptatibus autem recusandae iste corporis distinctio 
              ad, enim hic.</h2>
            </div>
            <div>
              <h2 id="about-text" class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Nihil voluptate reprehenderit officia quod maxime praesentium excepturi similique 
              repellat quam dolorem, illum voluptatibus autem recusandae iste corporis distinctio 
              ad, enim hic.</h2>
            </div>
            <div>
              <h2 id="about-text" class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Nihil voluptate reprehenderit officia quod maxime praesentium excepturi similique 
              repellat quam dolorem, illum voluptatibus autem recusandae iste corporis distinctio 
              ad, enim hic.</h2>
            </div>
          </div> <!-- overlay background div -->
        </div> <!-- overlay padding div -->

      </div> 
    </figure>
  </section>

  <!-- DRONES SECTION -->
  <section class="section is-centered">
    <div class="has-text-centered">
      <h1 id="drone-text" class="title">DRONES</h1>
      <p><br></p>
    </div>
    
    <div class="columns">
      <div class="column">
        <figure class="image is-5by4 level">
          <img class="cover" src="src\assets\Design Pics\Drone\27_0030.png" alt="Drone Fast Image" width="1280" height="720">

          <div class="is-overlay level-item">
            <div id="drone-overlay-padding">
              <div id="drone-overlay-background">

                <div class="has-text-centered">
                  <h2 id="drone-text" class="title">FAST</h2>
                  <p><br></p>
                </div>

                <div>
                  <h2 id="drone-text" class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Nihil voluptate reprehenderit officia quod maxime praesentium excepturi similique 
                  repellat quam dolorem, illum voluptatibus autem recusandae iste corporis distinctio 
                  ad, enim hic.</h2>
                </div>

              </div> <!-- overlay background div -->
            </div> <!-- overlay padding div -->
          </div> <!-- overlay div -->

        </figure>
      </div>

      <div class="column">
        <figure class="image is-5by4 level">
          <img class="cover" src="src\assets\Design Pics\Drone\6_0030.png" alt="Drone Reliable Image" width="1280" height="720">

          <div class="is-overlay level-item">
            <div id="drone-overlay-padding">
              <div id="drone-overlay-background">

                <div class="has-text-centered">
                  <h2 id="drone-text" class="title">RELIABLE</h2>
                  <p><br></p>
                </div>

                <div>
                  <h2 id="drone-text" class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Nihil voluptate reprehenderit officia quod maxime praesentium excepturi similique 
                  repellat quam dolorem, illum voluptatibus autem recusandae iste corporis distinctio 
                  ad, enim hic.</h2>
                </div>

              </div> <!-- overlay background div -->
            </div> <!-- overlay padding div -->
          </div> <!-- overlay div -->

        </figure>
      </div>

      <div class="column">
        <figure class="image is-5by4">
          <img class="cover" src="src\assets\Design Pics\Drone\8_0030.png" alt="Drone Affordable Image" width="1280" height="720">

          <div class="is-overlay level-item">
            <div id="drone-overlay-padding">
              <div id="drone-overlay-background">

                <div class="has-text-centered">
                  <h2 id="drone-text" class="title">RELIABLE</h2>
                  <p><br></p>
                </div>

                <div>
                  <h2 id="drone-text" class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Nihil voluptate reprehenderit officia quod maxime praesentium excepturi similique 
                  repellat quam dolorem, illum voluptatibus autem recusandae iste corporis distinctio 
                  ad, enim hic.</h2>
                </div>

              </div> <!-- overlay background div -->
            </div> <!-- overlay padding div -->
          </div> <!-- overlay div -->

        </figure>
      </div>
    </div>
    
  </section>

  <!-- CONTACTLESS DELIVERY -->
  <section class="section">
    <div class="has-text-centered">
      <h1 class="title">CONTACTLESS DELIVERY</h1>
    </div>
    
    <vueper-slides
    class="no-shadow"
    :visible-slides="3"
    :slide-ratio="1 / 4"
    :dragging-distance="70">
      <vueper-slide v-for="i in 9" :key="i" :title="i.toString()" />
    </vueper-slides>
  </section>

  <!-- CHARGING STATIONS -->
  <section class="section is-centered">
    <div class="has-text-centered">
      <h1 id="drone-text" class="title">CHARGING STATIONS</h1>
      <p><br></p>
    </div>
    
    <div class="columns">
      <div class="column">
        <figure class="image is-5by4 level">
          <img class="cover" src="src\assets\Design Pics\Batery Swap Station\24_0017.png" alt="Drone Fast Image" width="1280" height="720">

          <div class="is-overlay level-item">
            <div id="drone-overlay-padding">
              <div id="drone-overlay-background">

                <div class="has-text-centered">
                  <h2 id="drone-text" class="title">EFFECIENT</h2>
                  <p><br></p>
                </div>

                <div>
                  <h2 id="drone-text" class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Nihil voluptate reprehenderit officia quod maxime praesentium excepturi similique 
                  repellat quam dolorem, illum voluptatibus autem recusandae iste corporis distinctio 
                  ad, enim hic.</h2>
                </div>

              </div> <!-- overlay background div -->
            </div> <!-- overlay padding div -->
          </div> <!-- overlay div -->

        </figure>
      </div>

      <div class="column">
        <figure class="image is-5by4 level">
          <img class="cover" src="src\assets\Design Pics\Batery Swap Station\BatterySwapStation.jpg" alt="Drone Reliable Image" width="1280" height="720">

          <div class="is-overlay level-item">
            <div id="drone-overlay-padding">
              <div id="drone-overlay-background">

                <div class="has-text-centered">
                  <h2 id="drone-text" class="title">CLEAN</h2>
                  <p><br></p>
                </div>

                <div>
                  <h2 id="drone-text" class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Nihil voluptate reprehenderit officia quod maxime praesentium excepturi similique 
                  repellat quam dolorem, illum voluptatibus autem recusandae iste corporis distinctio 
                  ad, enim hic.</h2>
                </div>

              </div> <!-- overlay background div -->
            </div> <!-- overlay padding div -->
          </div> <!-- overlay div -->

        </figure>
      </div>

      <div class="column">
        <figure class="image is-5by4">
          <img class="cover" src="src\assets\Design Pics\Batery Swap Station\22_0017.png" alt="Drone Affordable Image" width="1280" height="720">

          <div class="is-overlay level-item">
            <div id="drone-overlay-padding">
              <div id="drone-overlay-background">

                <div class="has-text-centered">
                  <h2 id="drone-text" class="title">AUTONOMOUS</h2>
                  <p><br></p>
                </div>

                <div>
                  <h2 id="drone-text" class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Nihil voluptate reprehenderit officia quod maxime praesentium excepturi similique 
                  repellat quam dolorem, illum voluptatibus autem recusandae iste corporis distinctio 
                  ad, enim hic.</h2>
                </div>

              </div> <!-- overlay background div -->
            </div> <!-- overlay padding div -->
          </div> <!-- overlay div -->

        </figure>
      </div>
    </div>
    
  </section>

  <!-- BATTERY SWAP -->
  <section class="section">
    <div class="has-text-centered">
      <h1 class="title">BATTERY SWAP</h1>
    </div>
    
    <vueper-slides
    class="no-shadow"
    :visible-slides="3"
    :slide-ratio="1 / 4"
    :dragging-distance="70">
      <vueper-slide v-for="i in 9" :key="i" :title="i.toString()" />
    </vueper-slides>
  </section>

  <!-- CONTACT -->
  <section class="section">
    <div id="contact-form">
      <ContactForm>

      </ContactForm>
    </div>
  </section>

  <Footer/>
</template>

<style scoped>
#fill-background{
  background-color: black;
}

#title-overlay-pad{
  padding-right: 5%;
  padding-bottom: 17%;
}

#title-overlay-background{
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.25em;
}

#about-overlay-padding{
  padding-left: 5%;
  padding-right: 5%;
}
#about-overlay-background{
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.25em;
}

#drone-text{
  color: white;
}
#drone-overlay-padding{
  padding-left: 5%;
  padding-right: 5%;
}
#drone-overlay-background{
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.25em;
}


#about-text{
  color: white;
}

#tagline-home-page{
  color: white;
}

#title-home-page{
  font-family: 'Audiowide';
  font-size: 25pt;
  color: white;
}

#contact-form{
  padding-left: 20%;
  padding-right: 20%;
  /* background-color: rgb(0, 95, 183); */
  color: white;
}

.cover {
  object-fit: cover;
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
