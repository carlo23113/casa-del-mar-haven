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
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<style>
@import './assets/styles/main.css';
</style>
