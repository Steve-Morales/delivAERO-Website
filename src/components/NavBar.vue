<script setup lang="ts">
import './../../node_modules/Bulma/CSS/bulma.css';
</script>

<template>
    <!-- 
        https://bulma.io/documentation/components/navbar/
     -->
    <nav class="navbar is-black">


        <div class="navbar-brand">
            <!-- Note: must add 'https://' otherwise it assumes you are going to page within the website -->
            <a class="level" href="https://example.com">
                <img src="https://mindbodymoms.com/wp-content/uploads/2018/06/Your-Logo-here.png" alt="Aero Logo" width="45" height="15">
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
    flex:1;
    display: flex;
    align-content: center;
    justify-content: center;
}

.navbar-menu {
    flex-grow: initial;
    flex-shrink: initial;
}
</style>
