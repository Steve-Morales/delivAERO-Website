<script setup lang="ts">
// https://antoniandre.github.io/vueper-slides/?ref=madewithvuejs.com
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

import img1 from '/images/contactless-delivery/contactless-delivery-1.jpg'
import img2 from '/images/contactless-delivery/contactless-delivery-2.png'
import img3 from '/images/Design Pics/Drone/13_0030.png'
import img4 from '/images/Design Pics/Drone/17_0030.png'
import img5 from '/images/Design Pics/Drone/29_0030.png'
import img6 from '/images/Design Pics/Drone/30_0030.png'
import img7 from '/images/contactless-delivery/contactless-delivery-7.jpg'

let slides = [
        {
          title: 'Empty Title',
          content: 'Packing Factory',
          // You can also provide a URL for the image.
          image: img1
        },
        {
          title: 'Empty Title',
          content: 'Loading Packages',
          image: img2
        },
        {
          title: 'Empty Title',
          content: 'Leaving Warehouse',
          image: img3
        },
        {
          title: 'Empty Title',
          content: 'Zooming Through Neighborhood',
          image: img4
        },
        {
          title: 'Empty Title',
          content: 'Approching Customer',
          image: img5
        },
        {
          title: 'Empty Title',
          content: 'Ariving Destination',
          image: img6
        },
        {
          title: 'Empty Title',
          content: 'Packages Delivered',
          image: img7
        }
]
</script>

<template>
  <!-- CONTACTLESS DELIVERY -->
  <section class="section">
    <div class="has-text-centered">
      <h1 class="title is-1 white-text">CONTACTLESS DELIVERY</h1>
    </div>
    <div class="has-text-centered">
      <p><br><br></p>
    </div>
    
    <!-- fix text https://antoniandre.github.io/vueper-slides/?ref=madewithvuejs.com#:~:text=Version%202.2,the%20default%20wrapper -->
    <!-- Adding `slide-content-outside="bottom"` will move content text outside, but change padding! -->
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
        v-for="(slide, i) in slides"
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

img {
  object-fit: cover;
}

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
