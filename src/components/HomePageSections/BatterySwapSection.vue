<script setup lang="ts">
// https://antoniandre.github.io/vueper-slides/?ref=madewithvuejs.com
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

let batterySwapSlides = [
        {
          title: 'Empty Title',
          content: 'Battery Swap Station',
          // You can also provide a URL for the image.
          image: '/images/Design Pics/Batery Swap Station/BatterySwapStation.jpg'
        },
        {
          title: 'Empty Title',
          content: 'Clean Energy Powered',
          image: '/images/Design Pics/Batery Swap Station/23_0017.png'
        },
        {
          title: 'Empty Title',
          content: 'Supports Infrastructure',
          image: '/images/Design Pics/Batery Swap Station/26_0017.png'
        },
        {
          title: 'Empty Title',
          content: 'Fully Automated',
          image: '/images/Design Pics/Batery Swap Station/18_0017.png'
        },
        {
          title: 'Empty Title',
          content: 'Harvests Traffic Energy',
          image: '/images/Design Pics/Batery Swap Station/2_0017.png'
        }
]
</script>

<template>
  <!-- BATTERY SWAP -->
  <section class="section">
    <div class="has-text-centered">
      <h1 class="title is-1 white-text">BATTERY SWAP<br></h1>
    </div>
    <div class="has-text-centered">
      <p><br><br></p>
    </div>
    
    <vueper-slides
      class="no-shadow"
      vueperslides--animated
      autoplay
      :bullets="false"
      :visible-slides="3"
      :slide-ratio="1 / 5"
      :dragging-distance="70"
      :gap="3"
      >
      <vueper-slide
        v-for="(slide, i) in batterySwapSlides"
        :key="i"
        :image="slide.image">
        <template #content>
          <!-- <div class="vueperslide__title">
            <h1 class="title">{{ slide.title }}</h1>
          </div> -->
          <div class="vueperslide__content-wrapper">
            <h1 class="subtitle contentText">{{ slide.content }}</h1>
          </div>
        </template>  
      </vueper-slide>
    </vueper-slides>
  </section>
</template>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

.vueperslide__content-wrapper{
  /* moves div to the bottom */
  padding-top: 50%;
}

.vueperslide--active {
  /* TODO: on exit have animation ease out, the issue stems from the sliding **having** to be active */
  transition: all .7s ease-in-out;
  transform: scale(1.15);
  border-radius:15%;
  border-width: thick 100px;
  border:#4099ff solid;
}

.contentText{
  color: white;
}

.white-text{
  color: white;
}

section {
  background-color: #000;
}
</style>
