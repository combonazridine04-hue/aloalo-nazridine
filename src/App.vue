<script setup>
  import { RouterView } from 'vue-router'
  import NavBar from './components/NavBar.vue'
  import FooterSection from './components/FooterSection.vue'
  import LoginModal from './components/LoginModal.vue'
</script>

<template>
  <NavBar />
  <RouterView />
  <FooterSection />
  <LoginModal />
</template>
