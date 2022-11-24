<template>
  <div class="main-wrapper main-wrapper-1">
    <Navbar />
    <Slidebar />
    <div class="main-content">
      <section class="section">
        <router-view />
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
import Slidebar from "@/components/slidebar/Slidebar.vue";

export default {
 name: 'App',
  components: {
   Navbar, Slidebar
  },
};
</script>

<style scoped>

</style>
