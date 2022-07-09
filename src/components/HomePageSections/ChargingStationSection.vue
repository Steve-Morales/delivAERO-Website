<script setup lang="ts">
import droneChargeImg         from '/images/Design Pics/Batery Swap Station/24_0017.png';
import droneCleanImg          from '/images/Design Pics/Batery Swap Station/BatterySwapStation.jpg';
import droneAutoImg           from '/images/Design Pics/Batery Swap Station/22_0017.png';
</script>

<template>
  <!-- CHARGING STATIONS -->
  <section class="section is-centered" id="chargingStationSection">
    <div class="has-text-centered">
      <h1 id="drone-text" class="title is-1">CHARGING STATIONS</h1>
      <p><br></p>
    </div>
    
    <div class="columns">
      <div class="column">
        <figure class="image is-5by4 level">
          <img class="cover" :src="droneChargeImg" alt="Drone Charge Image" width="1280" height="720">

          <div class="is-overlay level-item">
            <div id="drone-overlay-padding">
              <div id="drone-overlay-background">

                <div class="has-text-centered">
                  <h2 id="drone-text" class="title">EFFECIENT</h2>
                  <p><br></p>
                </div>

                <div>
                  <h2 id="drone-text" class="subtitle">Our advanced charging stations maximize both the delivery and 
                    battery charging efficiencies by implementing a battery swapping mechanism.</h2>
                </div>

              </div> <!-- overlay background div -->
            </div> <!-- overlay padding div -->
          </div> <!-- overlay div -->

        </figure>
      </div>

      <div class="column">
        <figure class="image is-5by4 level">
          <img class="cover" :src="droneCleanImg" alt="Drone Clean Image" width="1280" height="720">

          <div class="is-overlay level-item">
            <div id="drone-overlay-padding">
              <div id="drone-overlay-background">

                <div class="has-text-centered">
                  <h2 id="drone-text" class="title">CLEAN</h2>
                  <p><br></p>
                </div>

                <div>
                  <h2 id="drone-text" class="subtitle">delivAERO's 
                    charging stations utilize highly efficient solar panels and wind generators for supplying 
                    clean energy to charge the batteries. </h2>
                </div>

              </div> <!-- overlay background div -->
            </div> <!-- overlay padding div -->
          </div> <!-- overlay div -->

        </figure>
      </div>

      <div class="column">
        <figure class="image is-5by4">
          <img class="cover" :src="droneAutoImg" alt="Drone Auto Image" width="1280" height="720">

          <div class="is-overlay level-item">
            <div id="drone-overlay-padding">
              <div id="drone-overlay-background">

                <div class="has-text-centered">
                  <h2 id="drone-text" class="title">AUTONOMOUS</h2>
                  <p><br></p>
                </div>

                <div>
                  <h2 id="drone-text" class="subtitle">Clean energy generation, 
                    unloading, charging, and swapping batteries are fully autonomous, and 
                    controller by the in-house microcontroller..</h2>
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
