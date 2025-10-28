<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <h3 class="font-serif text-2xl font-bold mb-4">Casa Del Mar Haven</h3>
          <p class="text-gray-400 mb-4">
            Your perfect escape where luxury meets the ocean.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-lg mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <a
                :href="link.href"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-semibold text-lg mb-4">Services</h4>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service">
              <span class="text-gray-400">{{ service }}</span>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="font-semibold text-lg mb-4">Newsletter</h4>
          <p class="text-gray-400 mb-4">Subscribe for exclusive offers</p>
          <form @submit.prevent class="flex">
            <input
              type="email"
              placeholder="Your email"
              class="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-ocean-500"
            />
            <button
              type="submit"
              class="bg-ocean-600 px-4 py-2 rounded-r-lg hover:bg-ocean-700 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm mb-4 md:mb-0">
          © {{ currentYear }} Casa Del Mar Haven. All rights reserved.
        </p>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Privacy Policy
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
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
