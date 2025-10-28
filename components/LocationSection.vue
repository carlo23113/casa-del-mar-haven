<template>
  <section id="location" class="py-16 md:py-32 bg-gradient-to-b from-white to-sand-50 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-20 right-10 w-96 h-96 bg-ocean-200 opacity-20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-10 w-80 h-80 bg-coral-200 opacity-20 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-20">
        <div class="inline-block mb-3 md:mb-4">
          <span class="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-ocean-600 font-semibold">Location</span>
        </div>
        <h2
          ref="titleRef"
          class="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 opacity-0 transition-all duration-1000 leading-tight"
          :class="{ 'opacity-100 translate-y-0': titleVisible }"
          style="transform: translateY(30px)"
        >
          Find Your Way to<br />
          <span class="text-ocean-600">Paradise</span>
        </h2>
        <div class="w-20 md:w-24 h-1 bg-gradient-to-r from-coral-400 to-ocean-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
        <p class="text-gray-600 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
          Nestled along the pristine coastline, our resort offers easy access while maintaining exclusive tranquility.
        </p>
      </div>

      <!-- Location Content Grid -->
      <div class="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
        <!-- Map -->
        <div
          ref="mapRef"
          class="opacity-0 transition-all duration-1000"
          :class="{ 'opacity-100 translate-x-0': mapVisible }"
          style="transform: translateX(0)"
        >
          <div class="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100">
            <!-- Interactive Map -->
            <div class="relative h-64 md:h-80 lg:h-96 xl:h-[500px] bg-gradient-to-br from-ocean-100 to-ocean-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126094.85714747054!2d123.85!3d10.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999258ddc2dfd%3A0x2b0d6368f8c0a90!2sCebu%2C%20Philippines!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="absolute inset-0 w-full h-full"
              ></iframe>

              <!-- Map overlay with controls hint -->
              <div class="absolute top-3 left-3 md:top-4 md:left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg">
                <div class="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <svg class="w-4 h-4 md:w-5 md:h-5 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="font-medium hidden sm:inline">Casa Del Mar Haven</span>
                  <span class="font-medium sm:hidden">CDM Haven</span>
                </div>
              </div>
            </div>

            <!-- Map Footer with Quick Info -->
            <div class="p-4 md:p-6 bg-gradient-to-r from-ocean-600 to-ocean-700 text-white">
              <div class="flex flex-wrap gap-4 md:gap-6 justify-around items-center">
                <div class="text-center">
                  <div class="text-xl md:text-2xl font-bold font-serif mb-1">15 min</div>
                  <div class="text-xs md:text-sm opacity-90">From Airport</div>
                </div>
                <div class="text-center">
                  <div class="text-xl md:text-2xl font-bold font-serif mb-1">5 min</div>
                  <div class="text-xs md:text-sm opacity-90">To Downtown</div>
                </div>
                <div class="text-center">
                  <div class="text-xl md:text-2xl font-bold font-serif mb-1">Private</div>
                  <div class="text-xs md:text-sm opacity-90">Beach Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Location Details -->
        <div
          ref="detailsRef"
          class="opacity-0 transition-all duration-1000 space-y-4 md:space-y-6"
          :class="{ 'opacity-100 translate-x-0': detailsVisible }"
          style="transform: translateX(0)"
        >
          <!-- Address Card -->
          <div class="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div class="flex items-start gap-3 md:gap-4">
              <div class="bg-ocean-100 p-3 md:p-4 rounded-lg md:rounded-xl flex-shrink-0">
                <svg class="w-6 h-6 md:w-8 md:h-8 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-serif text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Address</h3>
                <p class="text-sm md:text-base text-gray-600 leading-relaxed">
                  1234 Paradise Beach Boulevard<br />
                  Cebu, Philippines 6000
                </p>
                <a
                  href="https://maps.google.com/?q=Cebu+Philippines"
                  target="_blank"
                  class="inline-flex items-center gap-2 mt-3 md:mt-4 text-sm md:text-base text-ocean-600 hover:text-ocean-700 font-semibold transition-colors duration-300"
                >
                  <span>Get Directions</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Info Card -->
          <div class="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div class="flex items-start gap-3 md:gap-4">
              <div class="bg-coral-100 p-3 md:p-4 rounded-lg md:rounded-xl flex-shrink-0">
                <svg class="w-6 h-6 md:w-8 md:h-8 text-coral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-serif text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Contact</h3>
                <div class="space-y-2 text-sm md:text-base text-gray-600">
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="font-medium">Phone:</span>
                    <a href="tel:+63321234567" class="hover:text-ocean-600 transition-colors duration-300">+63 32 123 4567</a>
                  </div>
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="font-medium">Email:</span>
                    <a href="mailto:info@casadelmarhaven.com" class="hover:text-ocean-600 transition-colors duration-300 break-all">info@casadelmarhaven.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Transportation Card -->
          <div class="bg-gradient-to-br from-ocean-600 to-ocean-700 rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg text-white">
            <div class="flex items-start gap-3 md:gap-4">
              <div class="bg-white/20 p-3 md:p-4 rounded-lg md:rounded-xl backdrop-blur-sm flex-shrink-0">
                <svg class="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-serif text-lg md:text-xl lg:text-2xl font-bold mb-3">Getting Here</h3>
                <ul class="space-y-2 md:space-y-3 text-sm md:text-base text-white/90">
                  <li class="flex items-start gap-2">
                    <span class="text-sand-200 mt-1 flex-shrink-0">✈</span>
                    <span><strong>By Air:</strong> 15 minutes from Mactan-Cebu International Airport</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-sand-200 mt-1 flex-shrink-0">🚗</span>
                    <span><strong>By Car:</strong> Free parking available for all guests</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-sand-200 mt-1 flex-shrink-0">🚕</span>
                    <span><strong>Transfer Service:</strong> Complimentary airport pickup available</span>
                  </li>
                </ul>
                <button class="mt-4 md:mt-6 bg-white text-ocean-700 px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-sand-100 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  Request Pickup
                </button>
              </div>
            </div>
          </div>

          <!-- Nearby Attractions -->
          <div class="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg border border-gray-100">
            <h3 class="font-serif text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Nearby Attractions</h3>
            <div class="grid grid-cols-2 gap-3 md:gap-4">
              <div
                v-for="(attraction, index) in nearbyAttractions"
                :key="index"
                class="flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-ocean-50 transition-colors duration-300"
              >
                <div class="text-xl md:text-2xl flex-shrink-0">{{ attraction.icon }}</div>
                <div>
                  <div class="font-semibold text-sm md:text-base text-gray-900">{{ attraction.name }}</div>
                  <div class="text-xs md:text-sm text-gray-600">{{ attraction.distance }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const titleRef = ref<HTMLElement | null>(null)
const mapRef = ref<HTMLElement | null>(null)
const detailsRef = ref<HTMLElement | null>(null)
const titleVisible = ref(false)
const mapVisible = ref(false)
const detailsVisible = ref(false)

const nearbyAttractions = [
  { icon: '🏖️', name: 'White Beach', distance: '2 km' },
  { icon: '🛍️', name: 'Shopping Mall', distance: '3 km' },
  { icon: '🏛️', name: 'Historic Fort', distance: '5 km' },
  { icon: '🌴', name: 'Island Tours', distance: '1 km' }
]

const handleScroll = () => {
  if (titleRef.value) {
    const rect = titleRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    if (rect.top < windowHeight * 0.75) {
      titleVisible.value = true
    }
  }

  if (mapRef.value) {
    const rect = mapRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    if (rect.top < windowHeight * 0.75) {
      mapVisible.value = true
    }
  }

  if (detailsRef.value) {
    const rect = detailsRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    if (rect.top < windowHeight * 0.75) {
      detailsVisible.value = true
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
