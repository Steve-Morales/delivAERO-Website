<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import NavBar from './components/NavBar.vue';
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'
import HomePageSection from './components/HomePageSection.vue'

// browser page title name
document.title = "delivAERO"
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

#fill-background{
  background-color: black;
}

#contact-form{
  padding-left: 20%;
  padding-right: 20%;
  /* background-color: rgb(0, 95, 183); */
  color: white;
}

section {
  background-color: #000;
}

</style>
