<template>
  <div>
    <Navigation />
    <main>
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <AmenitiesSection />
      <GallerySection />
      <LocationSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

onMounted(() => {
  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = 'smooth'
})
</script>

<style>
@import './assets/styles/main.css';

/* Global smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar styling */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #0891b2;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #0e7490;
}

/* Enhanced shadow utility */
.shadow-3xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
