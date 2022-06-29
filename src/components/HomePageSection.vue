<script setup lang="ts">
// import './../../node_modules/Bulma/CSS/bulma.css';

// https://antoniandre.github.io/vueper-slides/?ref=madewithvuejs.com
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

import { defineExpose, ref } from 'vue'
import img from '@/assets/Design Pics/Batery Swap Station/18_0017.png';
let parallax = 1
let parallaxFixedContent = false
let slides = ([
        {
          title: 'El Teide Volcano, Spain',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: './src/assets/Design Pics/Drone/1_0034.png'
        },
        {
          title: 'El Teide Volcano, Spain',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: './src/assets/Design Pics/Drone/1_0034.png'
        },
        {
          title: 'El Teide Volcano, Spain',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: './src/assets/Design Pics/Drone/1_0034.png'
        },
        {
          title: 'El Teide Volcano, Spain',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: './src/assets/Design Pics/Drone/1_0034.png'
        }
        // Other slides.
])

let batterySwapSlides = [
        {
          title: 'El Teide Volcano, Spain',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: './src/assets/Design Pics/Batery Swap Station/23_0017.png'
        },
        {
          title: 'El Teide Volcano, Spain',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: './src/assets/Design Pics/Batery Swap Station/26_0017.png'
        },
        {
          title: 'El Teide Volcano, Spain',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: './src/assets/Design Pics/Batery Swap Station/18_0017.png'
        },
        {
          title: 'El Teide Volcano, Spain',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: './src/assets/Design Pics/Batery Swap Station/2_0017.png'
        },
        {
          title: 'El Teide Volcano, Spain',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: './src/assets/Design Pics/Batery Swap Station/BatterySwapStation.jpg'
        }
        // Other slides.
]

// import assets

// import droneImg from './../assets/Design Pics/Drone/7_0030.png';
// import droneStationImg from './../assets/Design Pics/Batery Swap Station/18_0017.png';
// import droneFastImg from './../assets/Design Pics/Drone/6_0030.png';
// import droneReliableImg from './../assets/Design Pics/Drone/6_0030.png';
// import droneAffordableImg from './../assets/Design Pics/Drone/8_0030.png';
// import droneChargeImg from './../assets/Design Pics/Batery Swap Station/24_0017.png';
// import droneCleanImg from './../assets/Design Pics/Batery Swap Station/BatterySwapStation.jpg';
// import droneAutoImg from './../assets/Design Pics/Batery Swap Station/22_0017.png';


</script>

<template>
  <section class="section">

<!-- to center columns, the parent has to be the image which is impossible -->
    <div class="card">

      <div class="card-image">
        <figure class="image is-2by1 level">
          <img src="" alt="Drone Image" width="1280" height="720">

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
      <img :src="img" alt="Drone Station Image">
      <div class="is-overlay has-text-centered">
        <div>
          <p><br></p>
          <h1 class="title is-1">ABOUT</h1>
          <p><br></p>
        </div>

        <div id="about-overlay-padding">
          <div id="about-overlay-background">
            <div>
              <h2 id="about-text" class="subtitle">delivAERO is a student-run organization aiming to 
                reduce the pollution produced by last-mile delivery services.<br><br> We are designing and 
                developing fully autonomous, highly efficient, renewable energy-powered delivery 
                drones and charging stations to fulfill the rapidly growing demand in the eCommerce 
                and retail industries.</h2>
            </div>
          </div> <!-- overlay background div -->
        </div> <!-- overlay padding div -->

      </div> 
    </figure>
  </section>

  <section class="section">
    <div class="columns level">
      <div class="column level-item has-text-centered">
        <div>
          <img class="image is-128x128" src="https://purepaktechnology.com/wp-content/uploads/2019/01/our-mission-icon.png" alt="msg icon">
        </div>
        <hr class="is-inline-block">
        <h1 class="title is-2 white-text">OUR MISSION</h1>
        <br>
        <div>
          <h1 class="subtitle is-3 white-text">Bring packages to customers with a clean, efficient, and reliable delivery service network.</h1>
        </div>
      </div>

      <div class="column level-item has-text-centered">
        <div>
          <img class="image is-128x128" src="https://cdn2.iconfinder.com/data/icons/finance-and-banking-3-1/64/133-512.png" alt="msg icon">
        </div>
        <hr class="is-inline-block">
        <h1 class="title is-2 white-text">OUR VISION</h1>
        <br>
        <div>
          <h1 class="subtitle is-3 white-text">Bring packages to customers with a clean, efficient, and reliable delivery service network.</h1>
        </div>
      </div>

      <div class="column level-item has-text-centered">
        <div>
          <img class="image is-128x128" src="https://cdn4.iconfinder.com/data/icons/future-of-shopping-color/64/mobile-technology-circuit-digital-futuristic-512.png" alt="msg icon">
        </div>
        <hr class="is-inline-block">
        <h1 class="title is-2 white-text">TECHNOLOGY</h1>
        <br>
        <div>
          <h1 class="subtitle is-3 white-text">Bring packages to customers with a clean, efficient, and reliable delivery service network.</h1>
        </div>
      </div>
    </div>
  </section>

  <!-- DRONES SECTION -->
  <section class="section is-centered">
    <div class="has-text-centered">
      <h1 id="drone-text" class="title is-1">DRONES</h1>
      <p><br></p>
    </div>
    
    <div class="columns">
      <div class="column">
        <figure class="image is-5by4 level">
          <img class="cover" src="" alt="Drone Fast Image" width="1280" height="720">

          <div class="is-overlay level-item">
            <div id="drone-overlay-padding">
              <div id="drone-overlay-background">

                <div class="has-text-centered">
                  <h2 id="drone-text" class="title">FAST</h2>
                  <p><br></p>
                </div>

                <div>
                  <h2 id="drone-text" class="subtitle">delivAERO offers on-demand services to customers, 
                    by-passing all traffic and mitigates time wasted in manual delivery processes.</h2>
                </div>

              </div> <!-- overlay background div -->
            </div> <!-- overlay padding div -->
          </div> <!-- overlay div -->

        </figure>
      </div>

      <div class="column">
        <figure class="image is-5by4 level">
          <img class="cover" src="" alt="Drone Reliable Image" width="1280" height="720">

          <div class="is-overlay level-item">
            <div id="drone-overlay-padding">
              <div id="drone-overlay-background">

                <div class="has-text-centered">
                  <h2 id="drone-text" class="title">RELIABLE</h2>
                  <p><br></p>
                </div>

                <div>
                  <h2 id="drone-text" class="subtitle">Delivery drones provide safe, 
                    no-contact service to our customers. One delivery is made at a time to ensure quality and speed of service. </h2>
                </div>

              </div> <!-- overlay background div -->
            </div> <!-- overlay padding div -->
          </div> <!-- overlay div -->

        </figure>
      </div>

      <div class="column">
        <figure class="image is-5by4">
          <img class="cover" src="" alt="Drone Affordable Image" width="1280" height="720">

          <div class="is-overlay level-item">
            <div id="drone-overlay-padding">
              <div id="drone-overlay-background">

                <div class="has-text-centered">
                  <h2 id="drone-text" class="title">AFFORDABLE</h2>
                  <p><br></p>
                </div>

                <div>
                  <h2 id="drone-text" class="subtitle">delivAERO designs the most affordable and high quality 
                    delivery drones to replace the expensive vehicle delivery services used in today's society..</h2>
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
      <h1 class="title is-1 white-text">CONTACTLESS DELIVERY</h1>
    </div>
    <div class="has-text-centered">
      <p><br><br></p>
    </div>
    
    <!-- fix text https://antoniandre.github.io/vueper-slides/?ref=madewithvuejs.com#:~:text=Version%202.2,the%20default%20wrapper -->
    <vueper-slides ref="myVueperSlides" :parallax="parallax" :parallax-fixed-content="parallaxFixedContent"
      class="no-shadow"
      :visible-slides="3"
      :slide-ratio="1 / 4"
      :dragging-distance="70">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content" />
    </vueper-slides>
  </section>

  <!-- CHARGING STATIONS -->
  <section class="section is-centered">
    <div class="has-text-centered">
      <h1 id="drone-text" class="title is-1">CHARGING STATIONS</h1>
      <p><br></p>
    </div>
    
    <div class="columns">
      <div class="column">
        <figure class="image is-5by4 level">
          <img class="cover" src="" alt="Drone Charge Image" width="1280" height="720">

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
          <img class="cover" src="" alt="Drone Clean Image" width="1280" height="720">

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
          <img class="cover" src="" alt="Drone Auto Image" width="1280" height="720">

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
      <h1 class="title is-1 white-text">BATTERY SWAP<br></h1>
    </div>
    <div class="has-text-centered">
      <p><br><br></p>
    </div>
    
    <vueper-slides ref="myVueperSlides" :parallax="parallax" :parallax-fixed-content="parallaxFixedContent"
      class="no-shadow"
      :visible-slides="3"
      :slide-ratio="1 / 4"
      :dragging-distance="70">
      <vueper-slide
        v-for="(slide, i) in batterySwapSlides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content" />
    </vueper-slides>
  </section>

  <!-- OUR TEAM -->
  <section class="section">
    <div class="has-text-centered">
      <h1 class="title is-1 white-text">OUR TEAM</h1>
    </div>
    <div class="level">
      <div class="level-item">
        <hr>
      </div>
    </div>

    <div class="columns level">
      <div class="column level-item has-text-centered">
        <div>
          <figure class="image is-128x128 is-inline-block">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
        </div>
        <hr class="is-inline-block">
        <h1 class="title is-3 white-text">First Last</h1>
        <br>
        <div>
          <h1 class="subtitle is-5 white-text is-underlined"><b>Company Role</b></h1>
        </div>
        <div>
          <br>
          <p class="white-text has-text-centered">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa similique debitis asperiores ipsam error minima obcaecati eum velit, est dolores, harum rerum cupiditate placeat vel eligendi. Eum, perferendis necessitatibus.</p>
        </div>
      </div>

      <div class="column level-item has-text-centered">
        <div>
          <figure class="image is-128x128 is-inline-block">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
        </div>
        <hr class="is-inline-block">
        <h1 class="title is-3 white-text">First Last</h1>
        <br>
        <div>
          <h1 class="subtitle is-5 white-text is-underlined"><b>Company Role</b></h1>
        </div>
        <div>
          <br>
          <p class="white-text has-text-centered">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa similique debitis asperiores ipsam error minima obcaecati eum velit, est dolores, harum rerum cupiditate placeat vel eligendi. Eum, perferendis necessitatibus.</p>
        </div>
      </div>

      <div class="column level-item has-text-centered">
        <div>
          <figure class="image is-128x128 is-inline-block">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
        </div>
        <hr class="is-inline-block">
        <h1 class="title is-3 white-text">First Last</h1>
        <br>
        <div>
          <h1 class="subtitle is-5 white-text is-underlined"><b>Company Role</b></h1>
        </div>
        <div>
          <br>
          <p class="white-text has-text-centered">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa similique debitis asperiores ipsam error minima obcaecati eum velit, est dolores, harum rerum cupiditate placeat vel eligendi. Eum, perferendis necessitatibus.</p>
        </div>
      </div>

    </div> <!-- END OF ROW OF COLUMNS -->

    <div class="columns level">
      <div class="column level-item has-text-centered">
        <div>
          <figure class="image is-128x128 is-inline-block">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
        </div>
        <hr class="is-inline-block">
        <h1 class="title is-3 white-text">First Last</h1>
        <br>
        <div>
          <h1 class="subtitle is-5 white-text is-underlined"><b>Company Role</b></h1>
        </div>
        <div>
          <br>
          <p class="white-text has-text-centered">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa similique debitis asperiores ipsam error minima obcaecati eum velit, est dolores, harum rerum cupiditate placeat vel eligendi. Eum, perferendis necessitatibus.</p>
        </div>
      </div>

      <div class="column level-item has-text-centered">
        <div>
          <figure class="image is-128x128 is-inline-block">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
        </div>
        <hr class="is-inline-block">
        <h1 class="title is-3 white-text">First Last</h1>
        <br>
        <div>
          <h1 class="subtitle is-5 white-text is-underlined"><b>Company Role</b></h1>
        </div>
        <div>
          <br>
          <p class="white-text has-text-centered">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa similique debitis asperiores ipsam error minima obcaecati eum velit, est dolores, harum rerum cupiditate placeat vel eligendi. Eum, perferendis necessitatibus.</p>
        </div>
      </div>

      <div class="column level-item has-text-centered">
        <div>
          <figure class="image is-128x128 is-inline-block">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
        </div>
        <hr class="is-inline-block">
        <h1 class="title is-3 white-text">First Last</h1>
        <br>
        <div>
          <h1 class="subtitle is-5 white-text is-underlined"><b>Company Role</b></h1>
        </div>
        <div>
          <br>
          <p class="white-text has-text-centered">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa similique debitis asperiores ipsam error minima obcaecati eum velit, est dolores, harum rerum cupiditate placeat vel eligendi. Eum, perferendis necessitatibus.</p>
        </div>
      </div>

    </div> <!-- END OF ROW OF COLUMNS -->
  </section>
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
