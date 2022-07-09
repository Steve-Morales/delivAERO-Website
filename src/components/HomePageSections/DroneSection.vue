<script setup lang="ts">
import droneFastImg           from '/images/Design Pics/Drone/27_0030.png';
import droneReliableImg       from '/images/Design Pics/Drone/6_0030.png';
import droneAffordableImg     from '/images/Design Pics/Drone/8_0030.png';
</script>

<template>
  <!-- DRONES SECTION -->
  <section class="section is-centered" id="dronesSection">
    <div class="has-text-centered">
      <h1 id="drone-text" class="title is-1">DRONES</h1>
      <p><br></p>
    </div>
    
    <div class="columns">
      <div class="column">
        <figure class="image is-5by4 level">
          <img class="cover" :src="droneFastImg" alt="Drone Fast Image" width="1280" height="720">

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
          <img class="cover" :src="droneReliableImg" alt="Drone Reliable Image" width="1280" height="720">

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
          <img class="cover" :src="droneAffordableImg" alt="Drone Affordable Image" width="1280" height="720">

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
</template>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

img {
  object-fit: cover;
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

.cover {
  object-fit: cover;
}

section {
  background-color: #000;
}
</style>
