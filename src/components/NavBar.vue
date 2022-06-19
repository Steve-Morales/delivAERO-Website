<script setup lang="ts">
import './../../node_modules/Bulma/CSS/bulma.css';
</script>

<template>
    <!-- 
        https://bulma.io/documentation/components/navbar/
     -->
    <nav class="navbar is-fixed-top">


        <div class="navbar-brand">
            <!-- Note: must add 'https://' otherwise it assumes you are going to page within the website -->
            <a class="level" href="https://example.com">
                <img src="src/assets/Logos/121777091_331812758119005_4363361412390698990_n-removebg-preview.png" alt="Aero Logo" width="45" height="15">
            </a>
        </div>


        <div class="navbar-menu">

            <div class="navbar-start">
                <a class="navbar-item" href="https://example.com"> Home </a>
                <a class="navbar-item" href="https://example.com"> About </a>
                <a class="navbar-item" href="https://example.com"> Drones </a>
                <a class="navbar-item" href="https://example.com"> Charging Stations </a>
                <a class="navbar-item" href="https://example.com"> Our Team </a>
                <a class="navbar-item" href="https://example.com"> Contact </a>
            </div> <!-- navbar-start -- end -->

        </div> <!-- navbar-menu -- end -->


    </nav>
</template>

<style scoped>
.navbar {
    /*sets the transparency*/
    background-color: rgba(0, 0, 0, 0.5); 
    flex:1;
    display: flex;
    align-content: center;
    justify-content: center;
}

.navbar-menu {
    flex-grow: initial;
    flex-shrink: initial;
}

.navbar-item{
    color: #fff;
}

/* On Hover navbar-item class element -- changes background color of item container and txt color */
.navbar-item:hover{
    background-color: #fff !important;
    color: #000 !important;
}
</style>
