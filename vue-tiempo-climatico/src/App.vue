<template>
  <div class="flex flex-col min-h-screen font-roboto bg to-weather-primary">
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