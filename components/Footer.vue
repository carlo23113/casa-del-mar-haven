<template>
  <footer class="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white py-8 md:py-10 lg:py-12 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-ocean-600 opacity-5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-coral-500 opacity-5 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 mb-6 md:mb-7 lg:mb-8">
        <!-- Brand -->
        <div class="sm:col-span-2 lg:col-span-1">
          <h3 class="font-serif text-xl md:text-xl lg:text-2xl font-bold mb-3 md:mb-3 lg:mb-4 bg-gradient-to-r from-sand-200 to-coral-300 bg-clip-text text-transparent">Casa Del Mar Haven</h3>
          <p class="text-sm md:text-sm lg:text-base text-gray-400 mb-4 leading-relaxed">
            Your perfect escape where luxury meets the ocean.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-base md:text-base lg:text-lg mb-3 md:mb-3 lg:mb-4">Quick Links</h4>
          <ul class="space-y-1.5 md:space-y-1.5 lg:space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <a
                :href="link.href"
                class="group inline-flex items-center gap-1 text-sm md:text-sm lg:text-base text-gray-400 hover:text-sand-200 transition-all duration-300 hover:translate-x-1"
              >
                <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-semibold text-base md:text-base lg:text-lg mb-3 md:mb-3 lg:mb-4">Services</h4>
          <ul class="space-y-1.5 md:space-y-1.5 lg:space-y-2">
            <li v-for="service in services" :key="service">
              <span class="text-sm md:text-sm lg:text-base text-gray-400">{{ service }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-6 md:pt-7 lg:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-400 text-xs md:text-sm text-center md:text-left">
          © {{ currentYear }} Casa Del Mar Haven. All rights reserved.
        </p>
        <div class="flex space-x-4 md:space-x-6">
          <a href="#" class="text-gray-400 hover:text-sand-200 transition-all duration-300 text-xs md:text-sm hover:underline underline-offset-4">
            Privacy Policy
          </a>
          <a href="#" class="text-gray-400 hover:text-sand-200 transition-all duration-300 text-xs md:text-sm hover:underline underline-offset-4">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
]

const services = [
  'Room Service',
  'Spa & Wellness',
  'Airport Transfer',
  'Event Planning',
  'Tour Packages'
]
</script>
