<template>
  <section id="amenities" class="py-32 bg-gradient-to-b from-white via-ocean-50 to-white relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-coral-200 opacity-20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-ocean-200 opacity-20 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-block mb-4">
          <span class="text-sm tracking-[0.3em] uppercase text-ocean-600 font-semibold">Facilities</span>
        </div>
        <h2
          ref="titleRef"
          class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 opacity-0 transition-all duration-1000 leading-tight"
          :class="{ 'opacity-100 translate-y-0': titleVisible }"
          style="transform: translateY(30px)"
        >
          World-Class<br />
          <span class="text-ocean-600">Amenities</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-coral-400 to-ocean-500 mx-auto mb-8 rounded-full"></div>
        <p class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Indulge in our exclusive facilities designed to elevate your stay to extraordinary heights.
        </p>
      </div>

      <!-- Amenities Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div
          v-for="(amenity, index) in amenities"
          :key="index"
          ref="amenityRefs"
          class="text-center opacity-0 transition-all duration-1000"
          :class="{ 'opacity-100 translate-y-0': amenitiesVisible[index] }"
          style="transform: translateY(30px)"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="group cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
            <!-- Icon Container -->
            <div class="mb-6 flex justify-center">
              <div
                class="w-28 h-28 rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                :class="amenity.bgColor"
              >
                <div
                  class="text-5xl transition-transform duration-500 group-hover:scale-110"
                  v-html="amenity.icon"
                ></div>
              </div>
            </div>

            <!-- Content -->
            <h3 class="font-serif text-xl font-bold text-gray-900 mb-3">{{ amenity.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ amenity.description }}</p>
          </div>
        </div>
      </div>

      <!-- Featured Amenity Banner -->
      <div
        ref="bannerRef"
        class="relative overflow-hidden rounded-3xl shadow-2xl opacity-0 transition-all duration-1000"
        :class="{ 'opacity-100 scale-100': bannerVisible }"
        style="transform: scale(0.95)"
      >
        <div class="relative h-96 md:h-[500px] bg-gradient-to-br from-ocean-500 via-ocean-600 to-ocean-700">
          <div class="absolute inset-0 bg-black opacity-10"></div>
          <!-- Pattern overlay -->
          <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 30px 30px;"></div>

          <!-- Decorative circles -->
          <div class="absolute -top-20 -right-20 w-96 h-96 bg-coral-400 opacity-20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>

          <!-- Content -->
          <div class="relative h-full flex items-center justify-center text-white px-6">
            <div class="text-center max-w-4xl">
              <div class="text-6xl mb-6">🧘‍♀️</div>
              <h3 class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up leading-tight">
                Experience Pure<br />
                <span class="text-sand-200">Bliss</span>
              </h3>
              <p class="text-lg md:text-xl lg:text-2xl mb-10 animate-fade-in-up animation-delay-200 font-light leading-relaxed">
                Our award-winning spa offers rejuvenating treatments inspired by ancient wellness traditions
              </p>
              <a
                href="#contact"
                class="group inline-flex items-center gap-2 bg-white text-ocean-700 px-10 py-5 rounded-full font-semibold hover:bg-sand-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up animation-delay-400"
              >
                <span>Book a Spa Session</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
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
const bannerRef = ref<HTMLElement | null>(null)
const amenityRefs = ref<HTMLElement[]>([])
const titleVisible = ref(false)
const bannerVisible = ref(false)
const amenitiesVisible = ref<boolean[]>([])

const amenities = [
  {
    title: 'Infinity Pool',
    description: 'Stunning ocean-view pool with poolside bar service',
    icon: '🏊',
    bgColor: 'bg-ocean-100'
  },
  {
    title: 'Spa & Wellness',
    description: 'Full-service spa with massage and beauty treatments',
    icon: '💆',
    bgColor: 'bg-emerald-100'
  },
  {
    title: 'Fine Dining',
    description: 'Multiple restaurants featuring international cuisine',
    icon: '🍽️',
    bgColor: 'bg-amber-100'
  },
  {
    title: 'Fitness Center',
    description: 'State-of-the-art gym equipment and personal trainers',
    icon: '💪',
    bgColor: 'bg-rose-100'
  },
  {
    title: 'Water Sports',
    description: 'Kayaking, paddle boarding, and snorkeling activities',
    icon: '🏄',
    bgColor: 'bg-sky-100'
  },
  {
    title: 'Yoga Sessions',
    description: 'Daily yoga and meditation classes by the beach',
    icon: '🧘',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Kids Club',
    description: 'Supervised activities and entertainment for children',
    icon: '🎨',
    bgColor: 'bg-pink-100'
  },
  {
    title: 'Conference Hall',
    description: 'Modern facilities for meetings and events',
    icon: '🎯',
    bgColor: 'bg-indigo-100'
  }
]

amenitiesVisible.value = new Array(amenities.length).fill(false)

const handleScroll = () => {
  if (titleRef.value) {
    const rect = titleRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    if (rect.top < windowHeight * 0.75) {
      titleVisible.value = true
    }
  }

  if (bannerRef.value) {
    const rect = bannerRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    if (rect.top < windowHeight * 0.75) {
      bannerVisible.value = true
    }
  }

  amenityRefs.value.forEach((amenity, index) => {
    if (amenity) {
      const rect = amenity.getBoundingClientRect()
      const windowHeight = window.innerHeight
      if (rect.top < windowHeight * 0.75) {
        amenitiesVisible.value[index] = true
      }
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
