<template>
  <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background with parallax effect -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80')"
      :style="{ transform: `translateY(${scrollY * 0.5}px)` }"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-ocean-900/60 via-ocean-800/50 to-ocean-700/40"></div>
      <!-- Decorative circles -->
      <div class="absolute top-20 right-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-72 h-72 bg-coral-300 opacity-10 rounded-full blur-3xl"></div>
    </div>

    <!-- Animated waves -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
      <svg class="relative block w-full h-20 md:h-24 lg:h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          class="fill-white animate-wave"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          class="fill-white animate-wave-slow"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          class="fill-white"
        ></path>
      </svg>
    </div>

    <!-- Content -->
    <div class="relative z-20 text-center text-white px-6 max-w-6xl mb-24 md:mb-20 lg:mb-16">
      <!-- Decorative element -->
      <div class="opacity-0 animate-fade-in mb-4" style="animation-delay: 0.1s">
        <div class="inline-block border-t-2 border-b-2 border-white/30 py-2 px-8">
          <span class="text-sm md:text-base tracking-[0.3em] uppercase font-light">Luxury Beach Resort</span>
        </div>
      </div>

      <h1
        class="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 opacity-0 animate-fade-in-up leading-tight tracking-tight"
        style="animation-delay: 0.2s"
      >
        Casa Del Mar<br />
        <span class="text-sand-200">Haven</span>
      </h1>
      <p
        class="text-xl md:text-2xl lg:text-3xl mb-6 opacity-0 animate-fade-in-up font-light tracking-wide"
        style="animation-delay: 0.4s"
      >
        Where luxury meets the ocean
      </p>
      <div class="w-24 h-0.5 bg-coral-400 mx-auto mb-8 opacity-0 animate-scale-in" style="animation-delay: 0.5s"></div>
      <p
        class="text-base md:text-lg lg:text-xl mb-12 opacity-0 animate-fade-in-up max-w-3xl mx-auto font-light leading-relaxed text-white/90"
        style="animation-delay: 0.6s"
      >
        Experience tranquility and elegance at our exclusive beachside resort.<br class="hidden md:block" />
        Discover a paradise where every moment becomes a cherished memory.
      </p>
      <div
        class="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
        style="animation-delay: 0.8s"
      >
        <a
          href="#rooms"
          class="group relative bg-white text-ocean-700 px-10 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <span class="relative z-10">Explore Rooms</span>
          <div class="absolute inset-0 bg-sand-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </a>
        <a
          href="#contact"
          class="group relative border-2 border-white px-10 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10"
        >
          <span class="relative z-10 group-hover:text-ocean-700 transition-colors duration-300">Book Now</span>
          <div class="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in z-30" style="animation-delay: 1s">
      <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2 animate-bounce">
        <div class="w-1 h-3 bg-white rounded-full"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
@keyframes wave {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-25px);
  }
}

@keyframes wave-slow {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-15px);
  }
}

.animate-wave {
  animation: wave 10s ease-in-out infinite;
}

.animate-wave-slow {
  animation: wave-slow 15s ease-in-out infinite;
}
</style>
