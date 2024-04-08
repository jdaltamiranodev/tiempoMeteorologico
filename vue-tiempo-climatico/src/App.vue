<template>
  <div class="flex flex-col min-h-screen font-roboto bg-primary-light">
    <SiteNavigation/>
    <RouterView/>
  </div>
</template>

<script setup>

import { RouterView } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";

</script>


