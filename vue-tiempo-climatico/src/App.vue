<template>
<<<<<<< HEAD
  <div class="flex flex-col min-h-screen font-roboto black">
=======
  <div class="flex flex-col min-h-screen font-roboto bg to-weather-primary">
>>>>>>> 3c4b315563cf939846efb81f34f23f98b30a706f
    <SiteNavigation/>
    <HomeView/>
    <RouterView/>
    
  </div>
 <Footer />
 
</template>

<script setup>

import { RouterView } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";

</script>