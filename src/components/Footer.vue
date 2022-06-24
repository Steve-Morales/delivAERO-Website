<script setup lang="ts">
import './../../node_modules/Bulma/CSS/bulma.css';
</script>

<template>
    <footer class="footer">
        <div class="columns level">
            <div class="column level-item">
                <img class="image is-64x64" src="src\assets\Logos\delivAERO_Logo-removebg.png" alt="logo">
            </div>

            <div class="column level-item">
                <a href="https://www.linkedin.com/company/delivaero/">
                    <img class="image is-64x64" src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" alt="logo">
                </a>
            </div>

            <div class="column is-white level-item">
                <h2>delivaero@ucsd.edu</h2>
                <h2><br>9500 Gilman Dr,<br>La Jolla, California 92093</h2>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer{
    background-color: black;
}

.is-white{
    color: white;
}
</style>
