<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import '@/../node_modules/Bulma/CSS/bulma.css';

import NavBar from './components/NavBar.vue';
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'
import HomePageSection from './components/HomePageSection.vue'
</script>

<template>

  <div>
    <NavBar>

    </NavBar>
    <p id="fill-background"><br></p>
  </div>

  <HomePageSection>

  </HomePageSection>

  <!-- CONTACT -->
  <section class="section" id="contactSection">
    <div id="contact-form">
      <ContactForm>

      </ContactForm>
    </div>
  </section>

  <Footer/>
</template>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
hr{
  width: 50%;
}

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

.white-text{
  color: white;
}
#about-text{
  color: white;
  font-size: 275%;
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
