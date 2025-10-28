<template>
  <nav
    :class="[
      'fixed w-full z-50 transition-all duration-500',
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg py-4' : 'bg-gradient-to-b from-black/30 to-transparent py-6'
    ]"
  >
    <div class="container mx-auto px-4 md:px-6 flex justify-between items-center">
      <a
        href="#home"
        :class="[
          'font-serif text-xl md:text-2xl lg:text-3xl font-bold transition-colors duration-300 flex items-center gap-2',
          scrolled ? 'text-ocean-700' : 'text-white'
        ]"
      >
        <span class="text-2xl md:text-3xl">🏖️</span>
        <span class="hidden sm:inline">Casa Del Mar Haven</span>
        <span class="sm:hidden">CDM</span>
      </a>

      <div class="hidden lg:flex items-center space-x-0.5 xl:space-x-1 2xl:space-x-2">
        <a
          v-for="item in menuItems"
          :key="item.name"
          :href="item.href"
          :class="[
            'font-medium px-2 xl:px-3 2xl:px-4 py-2 rounded-full transition-all duration-300 text-xs xl:text-sm 2xl:text-base whitespace-nowrap',
            scrolled
              ? 'text-gray-700 hover:bg-ocean-50 hover:text-ocean-700'
              : 'text-white hover:bg-white/10 backdrop-blur-sm'
          ]"
        >
          {{ item.name }}
        </a>
        <a
          href="#contact"
          :class="[
            'ml-1 xl:ml-2 2xl:ml-4 px-4 xl:px-5 2xl:px-6 py-2 rounded-full text-xs xl:text-sm 2xl:text-base font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap',
            scrolled
              ? 'bg-gradient-to-r from-ocean-600 to-ocean-700 text-white hover:from-ocean-700 hover:to-ocean-800 shadow-md'
              : 'bg-white text-ocean-700 hover:bg-sand-100'
          ]"
        >
          Book Now
        </a>
      </div>

      <button
        @click="toggleMenu"
        :class="[
          'lg:hidden p-2 rounded-lg transition-all duration-300',
          scrolled ? 'text-gray-700 hover:bg-ocean-50' : 'text-white hover:bg-white/10 backdrop-blur-sm'
        ]"
      >
        <svg class="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile/Tablet Menu -->
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden bg-white/95 backdrop-blur-lg shadow-lg animate-fade-in-up"
    >
      <div class="container mx-auto px-6 py-6 flex flex-col space-y-2">
        <a
          v-for="item in menuItems"
          :key="item.name"
          :href="item.href"
          class="text-gray-700 hover:text-ocean-700 hover:bg-ocean-50 px-4 py-3 rounded-lg transition-all duration-300 font-medium"
          @click="toggleMenu"
        >
          {{ item.name }}
        </a>
        <a
          href="#contact"
          class="mt-4 bg-gradient-to-r from-ocean-600 to-ocean-700 text-white px-6 py-3 rounded-full font-semibold text-center hover:from-ocean-700 hover:to-ocean-800 transition-all duration-300"
          @click="toggleMenu"
        >
          Book Now
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
nav a {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: currentColor;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
}
</style>
