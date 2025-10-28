<template>
  <footer class="bg-gray-900 text-white py-8 md:py-10 lg:py-12">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 mb-6 md:mb-7 lg:mb-8">
        <!-- Brand -->
        <div class="sm:col-span-2 lg:col-span-1">
          <h3 class="font-serif text-xl md:text-xl lg:text-2xl font-bold mb-3 md:mb-3 lg:mb-4">Casa Del Mar Haven</h3>
          <p class="text-sm md:text-sm lg:text-base text-gray-400 mb-4">
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
                class="text-sm md:text-sm lg:text-base text-gray-400 hover:text-white transition-colors duration-300"
              >
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
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 text-xs md:text-sm">
            Privacy Policy
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 text-xs md:text-sm">
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
