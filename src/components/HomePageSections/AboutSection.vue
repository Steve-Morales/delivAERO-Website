<script setup lang="ts">
import droneStationImg from '/images/Design Pics/Batery Swap Station/18_0017.png';
</script>

<template>
  <!-- ABOUT SECTION -->
    <section class="section is-centered" id="aboutSection">
        <figure class="image is-2by1 level">
            <img :src="droneStationImg" alt="Drone Station Image">
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
</template>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

#about-overlay-padding{
  padding-left: 5%;
  padding-right: 5%;
}
#about-overlay-background{
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.25em;
}

#about-text{
  color: white;
  font-size: 275%;
}

section {
  background-color: #000;
}
</style>
