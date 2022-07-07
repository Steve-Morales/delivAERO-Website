<script setup lang="ts">
// import './../../node_modules/Bulma/CSS/bulma.css';
const phone = ''; // this will hold the value of the phone number 
// export {phone}

//https://www.youtube.com/watch?v=r4RQ38EoLds
</script>

<template>
    <form action="https://formsubmit.co/5db54ad00181a723a5a7acb179143409" method="POST">

        <div>
            <h1 class="title has-text-centered">
                CONTACT US
            </h1>
            <p><br></p>
        </div>

        <div class="field">
            <div class="columns">
                <div class="column">
                    <label class="label">First Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="e.g. Jhon" name="First Name" required>
                    </div>
                </div>
                <div class="column">
                    <label class="label">Last Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="e.g. Doe" name="Last Name" required>
                    </div>
                </div>
            </div>
        </div>

        <div class="field">
            <div class="columns">
                <div class="column">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-danger" type="email" placeholder="e.g. jhon-doe@email.com" value="" name="email" required>
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                    <p class="help is-danger">This email is invalid</p>
                </div>
                <div class="column">
                    <label class="label">Phone</label>
                    <!-- https://www.npmjs.com/package/vue3-tel-input -->
                    <vue-tel-input v-model.number="phone"></vue-tel-input>
                    
                </div>
            </div>

        </div>

        <div class="field">
            <label class="label">Message</label>
            <div class="control">
                <textarea class="textarea" placeholder="" name="Message" required></textarea>
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" type="submit">Submit</button>
            </div>
        </div>

        <!-- confirmation email to user -->
        <input type="hidden" name="_autoresponse" value="your custom message"> 
        <!-- confirmation email to us (company) -->
        <input type="hidden" name="_subject" value="delivAERO - New Customer Message!">
    </form>
</template>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
.label{
    color: white;
}

.title{
    color: white;
}
</style>