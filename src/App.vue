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
#fill-background{
  background-color: black;
}
</style>
